const signupForm=document.querySelector("#user");
const email=document.querySelector("#email");
const pass=document.querySelector("#pass");

function addUser(){
    let newUser={
        email: email.value,
        pass: pass.value
    }
    fetch('/user', {
        method: 'POST',
        body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        return res.json();
    })
    .then((data)=>{
    console.log(data);
    if(data.success){
        alert(data.message);
        signupForm.reset();
    }
    else{
        alert(data.err);
        signupForm.reset();
    }
    })
    .catch((err)=>{
        console.log(err);
    })
};
signupForm.addEventListener("submit",function(event){
    event.preventDefault()
    addUser(email.value,pass.value);
})