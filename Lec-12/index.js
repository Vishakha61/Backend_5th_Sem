let box=document.querySelector("#box");
let btn=document.querySelector("#btn");
let colours=["red","blue","green","yellow","orange","purple"];
let id=null;  
function generateRandomColor() {
    let index = Math.floor(Math.random() * 10);
    console.log(index);
    
    let randomColor = colours[index];
    console.log(randomColor);
    box.style.background = randomColor;
    
}
btn.addEventListener("click", function() {
    setInterval(() => {
        generateRandomColor();

    },500);  
});
stop.addEventListener("click", function() {
    if(id){
    clearInterval(id);
    id=null;
    }
    box.style.background = "white";
});
