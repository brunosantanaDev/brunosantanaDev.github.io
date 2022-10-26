//desktop
export default function animacaoScroll(){
  const sections = document.querySelectorAll(".js [data-center]");
  const metadeTela = window.innerHeight * 0.6;

  function handleAnimaAoScroll(){
    sections.forEach(section => {
      let distanciaTopo = section.getBoundingClientRect().top;
      let viewport = (distanciaTopo - metadeTela) < 0;

      if(viewport){
        section.classList.add("ativo");
      }else{
         section.classList.remove("ativo");
      }     
    });
  }

  handleAnimaAoScroll();
  window.addEventListener("scroll", handleAnimaAoScroll);
}

