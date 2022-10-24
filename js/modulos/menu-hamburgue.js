export default function initMenuHamburgue(){
  const menuBurguer = document.querySelector(".pointer-hamburguer");
  const links = document.querySelector(".links");
  const eventos = ["click","touchstart"];


  function handleOpenMenu(event){
    this.classList.add("ativo");
    links.classList.add("ativo");
    
    outsideClick(links, eventos, () => {
      this.classList.remove("ativo");
      links.classList.remove("ativo");
    });
  }

  function outsideClick(element, useEvents, callbackRemove){
    const html = document.documentElement;

    if(!element.hasAttribute("data-outside")){
      useEvents.forEach(event => {
        setTimeout(()=>{html.addEventListener(event, removeEvents)});
      });    
      element.setAttribute("data-outside", "");
    }

    function removeEvents(event){
      if(!element.contains(event.target)){
        element.removeAttribute("data-outside");
        callbackRemove();
        useEvents.forEach((events) => {
          html.removeEventListener(events, removeEvents);
        });
      }

      const clickLink = links.querySelectorAll("a");

      clickLink.forEach(link => {
        if(link == event.target){
          links.removeAttribute("data-outside");
          links.classList.remove("ativo");
          menuBurguer.classList.remove("ativo");

          useEvents.forEach((events) => {
            html.removeEventListener(events, removeEvents);
          });
        }
      });
    }    
  }
  
  ["touchstart","click"].forEach(eventos => {
    menuBurguer.addEventListener(eventos, handleOpenMenu);
  })
}






