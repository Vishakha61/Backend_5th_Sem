const signUpForm = document.querySelector('#signUpForm');
const signUpUsername = document.querySelector('#signUpUsername');
console.log("aaa" ,    signUpUsername);
const signUpEmail = document.querySelector('#signUpEmail');
const signupPassword = document.querySelector('#signUpPassword');

signUpForm.addEventListener('submit', async function(e){
  e.preventDefault();
    const username = signUpUsername.value;
    const email = signUpEmail.value;
    const password = signUpPassword.value;  
let response = await fetch("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: username,
        email: email,
        password: password
    })
});
if (!response.ok) {
    console.error("Signup failed:", await response.text());
} else {
    let data = await response.json();
    console.log(data);
}

}
);