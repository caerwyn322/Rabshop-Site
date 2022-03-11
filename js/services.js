var modal = document.getElementById("modal");
var closeBtn = document.getElementById("close");
window.onclick =function(event){
    if(event.target == modal){
        modal.style.display = "none";
    };
};
closeBtn.onclick = function(){
    modal.style.display = "none";
}


function modalOpen(){
  modal.style.display = "block";
}
function modalClose(){
  modal.style.display = "none";
}
