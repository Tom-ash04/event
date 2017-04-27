var add = document.getElementById("addElem");
var list = document.getElementById("list");
add.addEventListener("click", function(){list.innerHTML += "<li>item</li>";
var row = document.getElementsByTagName("li");
for (i = 0; i < row.length; i ++){
    row[i].innerText = "item " + i;
}} )