//accessing dom element
//1)using Id
let res = document.getElementById("mydiv");
console.dir(res)
//2)class Name
let h2 = document.getElementsByClassName("h2");
console.log(h2);
console.log(h2[0]);
//3 tagName
let res2 =document.getElementsByTagName("p");
console.log(res2);
//4 querySelector
let res3 = document.querySelector(".mydiv");  //class # id  .
console.log(res3);
//5 querySelectorAll
let res4 = document.querySelectorAll("p");
console.log(res4);

console.log(res.getAttribute("id"));
let btn = document.querySelector(".btn");
btn.addEventListener("click", () =>{
    
        res.setAttribute("class", "js");

});

// Properties of document
//1) acessing body  content and changing it
// //*innerHTML
// console.log(res.innerHTML); //gettter & settter
// res.innerHTML = "<p>Change using Dom </p>";
//*innerText
// console.log(res.innerText); //gettter & settter 
// res.innerText = "Change using Dom inner text ";

// console.log(res.getAttribute("id")); 
// //setAttribute
// res.setAttribute("id", "mydiv");
let myH = document.querySelector(".h2");

console.log(myH.classList);
myH.classList.add("h1");
myH.classList.remove("myh2");
myH.classList.toggle("h1");
let form = document.querySelector(".signUp")
btn.addEventListener("click", () => {
    
    form.classList.toggle("hide");
});