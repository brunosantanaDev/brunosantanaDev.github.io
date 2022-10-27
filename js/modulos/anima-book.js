export default function initAnimaBook() {
  const section = document.querySelector(".js [data-js-book]")
  const bookmark = document.querySelector(".bookmark");

  if(section){
    function handleBookMark(){
      if(section.getBoundingClientRect().top < -300){
        bookmark.classList.add("ativo")
      }else{
        bookmark.classList.remove("ativo")
      }
    } 
    window.addEventListener("scroll", handleBookMark);
  }
}








