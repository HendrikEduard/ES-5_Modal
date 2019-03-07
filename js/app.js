var btn = document.getElementById("btn");
var modal = document.querySelector(".modal-section");
var close = document.getElementById("close");

btn.addEventListener("click", function(){
  modal.style.display = "block";
});

close.addEventListener("click", function(){
  modal.style.display = "none";
});

modal.addEventListener("click", function(e){
  var className = e.target.getAttribute("class");
  if(className === "modal-section"){
    modal.style.display = "none";
  }
});
