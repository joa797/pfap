var btnDesplegar = document.getElementById("btnDesplegar");
var listaDesplegable = document.getElementById("listaDesplegable");

btnDesplegar.addEventListener("click", function(){
  if(listaDesplegable.style.display === "none") {
    listaDesplegable.style.display = "block";
  } else {
    listaDesplegable.style.display = "none";
  }
});