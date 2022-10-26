export default function initBarrinhas(){
  const valorBarra = [
    {nome: "Git e Github", valor: 50},
    {nome: "HTML e CSS:", valor:70},
    {nome: "Sass", valor:50},
    {nome: "Javascript", valor:50},
    {nome: "Typescript", valor:30},
    {nome: "Bootstrap", valor:0},
    {nome: "React", valor:0},
    {nome: "Photoshop", valor:50},
    {nome: "Banco de Dados", valor: 50},
    {nome: "PHP", valor: 10},
    {nome: "Node Js", valor:0},
  ];

  const barrinhas = document.querySelectorAll(".js .grid-habilidade");

  if(barrinhas){
    barrinhas.forEach((barrinha, index) => {
    let span = barrinha.querySelector("span:nth-child(2)");
      span.innerText = valorBarra[index].valor + "%";
      barrinha.querySelector(".barrinha div").style.width = valorBarra[index].valor + "%";
    });
  }
}






