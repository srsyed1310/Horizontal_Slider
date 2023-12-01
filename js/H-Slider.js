

var panel = document.querySelectorAll(".panel");


panel.forEach(function(e){

  e.addEventListener("click", function(){
    removeclass();
    e.classList.add("active")
  })

})

function removeclass() {
  panel.forEach(function(e){
    e.classList.remove("active");
  })
}