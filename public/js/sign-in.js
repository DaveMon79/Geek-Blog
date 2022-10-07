
// Takes user details to make API call to server to log in
const signIn = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('passsword').value.trim()

  if (email && password) {

    const response = await fetch('/api/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response)
    if (response.ok) {
      alert('Sign in successful')
      document.location.replace('/api/blogs/dashboard')
    } else {
      alert('Failed to sign in')
    }
  }
};


// Variable for button
const signInButton = document.getElementById("sign-in-button").addEventListener("click", signIn)


