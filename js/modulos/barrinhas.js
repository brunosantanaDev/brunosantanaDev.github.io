export default function initBarrinhas(){
  const valorBarra = [
    {nome: "git e github", valor: 50},
    {nome: "html e css:", valor:70},
    {nome: "sass", valor:50},
    {nome: "javascript", valor:50},
    {nome: "typescript", valor:30},
    {nome: "bootstrap", valor:0},
    {nome: "react", valor:0},
    {nome: "photoshop", valor:50},
    {nome: "sgbd (mysql)", valor: 50},
    {nome: "php", valor: 10},
    {nome: "node Js", valor:0},
  ];

  const barrinhas = document.querySelectorAll(".js [data-js-grid-habilidade]");

  if(barrinhas){
    barrinhas.forEach((barrinha, index) => {
    let span1 = barrinha.querySelector("span:nth-child(1)");
    let span2 = barrinha.querySelector("span:nth-child(2)");
      span1.innerText = valorBarra[index].nome.toUpperCase();
      span2.innerText = valorBarra[index].valor + "%";
      barrinha.querySelector(".barrinha div").style.width = valorBarra[index].valor + "%";
    });
  }
}






