window.onload = function(){
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    page1.addEventListener("touchstart", function(event){
        page1.style.display = "none";
        page2.style.display = "block";
        
    },false);
}