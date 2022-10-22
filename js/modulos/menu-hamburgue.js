export default function initMenuHamburgue(){
  const menuBurguer = document.querySelector(".pointer-hamburguer");

  function handleOpenMenu(event){
    this.classList.toggle("ativo");
  }

  menuBurguer.addEventListener("click", handleOpenMenu);
}






