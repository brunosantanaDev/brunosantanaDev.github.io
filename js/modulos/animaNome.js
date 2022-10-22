export default function initAnimaNome() {
    const nome = document.querySelector(".js [data-animaNome]");

    if(nome){
      const nomeArray = nome.innerText.split("");
      const letras = nomeArray.slice();
      nome.innerText = "";
    
    window.onload = function (){   
      letras.forEach((letra,index) => {
        setTimeout(() => {
        nome.innerText += letra;
        },index * 300);
      }); 
    }
  }
}








