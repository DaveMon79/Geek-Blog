
// Takes user details to make API call to server to create a new account
const signUp = async () => {
    event.preventDefault();
  
    const username = document.getElementById('sign-up-username').value.trim()
    const email = document.getElementById('sign-up-email').value.trim()
    const password = document.getElementById('sign-up-password').value.trim()
   
    const response = await fetch(`/api/sign-up`, {
      method: 'POST',
      body: JSON.stringify({ username: username, email: email, paassword: password }),
      headers: { 'Content-Type': 'application/json'},
    });
  
    console.log(username, email, password )
    if (response.ok) {
      document.location.replace('/api/blogs/dashboard:id')
    } else {
      alert('Failed to sign up');
    }
  
  }

const signUpButton = document.getElementById("sign-up-button").addEventListener("click", signUp)