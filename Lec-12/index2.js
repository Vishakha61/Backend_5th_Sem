let edit=document.querySelector(".edit");
let del=document.querySelector(".delete");
console.log(edit.nextElementSibling)
console.log(edit.previousElementSibling);
console.log(edit.nextElementSibling.nextElementSibling.innerText);
console.log(edit.parentElement.previousElementSibling);
let id=del.parentElement.parentElement.parentElement.getAttribute("id");

//first child,last child,nth child
console.log(id);