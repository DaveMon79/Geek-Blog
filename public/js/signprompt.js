

// Re-directs user to sign up page
const signUpFunction = () => {

    document.location.replace('/sign-up')
}


// Re-directs user to sign in page
const signInFunction = () => {

    document.location.replace('/sign-in')
}


const singUp = document.getElementById("sign-up").addEventListener("click", signUpFunction)
const singIn = document.getElementById("sign-in").addEventListener("click", signInFunction)