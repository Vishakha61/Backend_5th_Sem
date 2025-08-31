const loginForm = document.querySelector('#login-form');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');

loginForm.addEventListener('submit', async function(e){
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  let response = await fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          email: email,
          password: password
      })
  });

  if (!response.ok) {
      console.error("Login failed:", await response.text());
  } else {
      let data = await response.json();
      console.log(data);
  }
});

