window.onload = function() {
   
    var userName = document.getElementById("button-name"); 

    userName.addEventListener("click", function(){
        var name = document.getElementById("input-name").value;
        document.getElementById("show-name").innerHTML = "Bienvenid@: " + name;
    })

     


}