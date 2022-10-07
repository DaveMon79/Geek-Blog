
// Takes user details to make API call to server to create a new account
const signUp = async () => {
    event.preventDefault();
  
    const username = document.getElementById('sign-up-username').value.trim()
    const email = document.getElementById('sign-up-email').value.trim()
    const password = document.getElementById('sign-up-password').value.trim()
   
    const response = await fetch(`/api/sign-up`, {
      method: 'POST',
      body: JSON.stringify({ username: username, email: email, password: password }),
      headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
      document.location.replace('/api/blogs/dashboard')
    } else {
      console.log(response)
      alert('Failed to sign up');
    }
  
  }

const signUpButton = document.getElementById("sign-up-button").addEventListener("click", signUp)