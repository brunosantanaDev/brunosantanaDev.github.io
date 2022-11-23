export default function initBarrinhas(){
  const tecValor = [
    {nome: "git e github", valor: 50},
    {nome: "html e css:", valor:70},
    {nome: "sass", valor:50},
    {nome: "javascript", valor:50},
    {nome: "typescript", valor:30},
    {nome: "bootstrap", valor:0},
    {nome: "react", valor:0},
    {nome: "photoshop", valor:50},
    {nome: "figma", valor:20},
    {nome: "sgbd (mysql)", valor: 50},
    {nome: "php", valor: 10},
    {nome: "node Js", valor:0},
  ];

  const barrinhas = document.querySelectorAll(".js [data-js-grid-habilidade]");
  let span1, span2, div;

  if(barrinhas.length){
    barrinhas.forEach((barrinha, index) => {
      span1 = barrinha.querySelector("span:nth-child(1)");
      span2 = barrinha.querySelector("span:nth-child(2)");
      span1.innerText = tecValor[index].nome.toUpperCase();
      span2.innerText = tecValor[index].valor + "%";
      div = barrinha.querySelector(".barrinha div");
      div.style.width = tecValor[index].valor + "%";
    });
  }
}






