export default function initScrollSuaveLinkInterno() {
  const links = document.querySelectorAll(".js a[href^='#']");
  const menu_links = document.querySelector(".links");
  const bookmark = document.querySelector(".bookmark a");
  links[0].classList.add("ativo");

  if(links.length){
    function handleScrollSuave(event){
      event.preventDefault();
      const href = this.getAttribute("href");  
      const section = document.querySelector(href);
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
    
      links.forEach((link) => {
        link.classList.remove("ativo");
      });
      this.classList.add("ativo");

      if(!menu_links.contains(event.target)){
          bookmark.classList.remove("ativo");
          bookmark.removeAttribute("class")/
          links[0].classList.add("ativo");
      }
    }

    links.forEach(link => {
      link.addEventListener("click", handleScrollSuave);
    });
  }
}








