
// Takes user details to make API call to server to log in
const signIn = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('passsword').value.trim()

  email.value = ""
  password.value = ""

  if (email && password) {

    const response = await fetch('/api/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/blogs/dashboard:id')
    } else {
      alert('Failed to sign in')
    }
  }
};





// Variables for buttons
const signInButton = document.getElementById("sign-in-button").addEventListener("click", signIn)


