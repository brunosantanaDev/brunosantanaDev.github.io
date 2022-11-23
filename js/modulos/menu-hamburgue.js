export default function initMenuHamburgue(){
  const menuBurguer = document.querySelector(".js .pointer-hamburguer");
  const links = document.querySelector(".js .links");
  const eventos = ["click"];

  if(links && menuBurguer){
    function handleOpenMenu(){
      this.classList.add("ativo");
      links.classList.add("ativo");      
      outsideClick(links, eventos, () => {
        this.classList.remove("ativo");
        links.classList.remove("ativo");
      });
    }

    eventos.forEach(evento => {
      menuBurguer.addEventListener(evento, handleOpenMenu);
    })

    function outsideClick(element, useEvents, callbackRemove){
      const html = document.documentElement;

      if(!element.hasAttribute("data-outside")){
        useEvents.forEach(evento => {
          setTimeout(() => {
            html.addEventListener(evento, removeAlls);
          });
        });    
        element.setAttribute("data-outside", "");
      }

      function removeAlls(event){
        if(!element.contains(event.target)){
          element.removeAttribute("data-outside");
          callbackRemove();

          useEvents.forEach((events) => {
            html.removeEventListener(events, removeAlls);
          }); 
        }

        const clickLink = links.querySelectorAll("a");

        clickLink.forEach(link => {
          if(link == event.target){
            links.removeAttribute("data-outside");
            links.classList.remove("ativo");
            menuBurguer.classList.remove("ativo");

            useEvents.forEach(events => {
              html.removeEventListener(events, removeAlls);
            });
          }
        });
      }    
    }

  }
}






