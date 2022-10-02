// Variables for the all the all buttons, input andd navigation routes
let home = document.getElementById("home")
let dashboard = document.getElementById("dashboard")
let logout = document.getElementById("logout")

let blogName = document.getElementById("blog-name")
let blogDate = document.getElementById("blog-date")
let blogText = document.getElementById("blog-text")

let signInUsername = document.getElementById("username")
let signInEmail = document.getElementById("email")
let signInPassword = document.getElementById("passsword")
let signInButton = document.getElementById("sign-in-button")

let signUpUsername = document.getElementById("sign-up-username")
let signUpEmail = document.getElementById("sign-up-email")
let signUpPassword = document.getElementById("sign-up-password")
let signUpButton = document.getElementById("sign-up-button")

let signUpButtonPrompt = document.getElementById("sign-up")
let signInButtonPrompt = document.getElementById("sign-in")

let newBlogText = document.getElementById("blog-input")
let newBlogButton = document.getElementById("save-blog-button")


// function is fired when user chooses to sign in
const signInHome = () => {
console.log("Cunt")
}

// function is fired when user chooses to sign in
const signUpHome = () => {
    console.log("Cunt")
}

// Takes user details to make API call to server to log in
const signIn = () => {
    
    let logInDetails = {

        username: signInUsername.value,
        email: signInEmail.value,
        password: signInPassword.value
    }
    console.log(logInDetails)
    signInUsername.value = ""
    signInEmail.value = ""
    signInPassword.value = ""

}

// Takes user details to make API call to server to create a new account
const signUp = () => {

    let signUpDetails = {

        username: signUpUsername.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }

    signUpUsername.value = ""
    signUpEmail.value = ""
    signUpPassword.value = ""


}

// takes the new blog and creates a n API post request
const newBlogFunction = () => {
    let newBlog = newBlogText.value
    console.log(newBlog)
    newBlogText.value = ""
}

// Sends user to home screen when clicked
const homeFunction = () => {
    console.log("home")
}


// Creates a get request to show all user blogs
const dashboardFunction = () => {
    console.log("dashboard")
}

// logs user out when logout option is clicked
const logOutFunction = () => {
    console.log("logout")
}

// Event listeners for all buttons
home.addEventListener("click", homeFunction)
dashboard.addEventListener("click", dashboardFunction)
logout.addEventListener("click", logOutFunction)

signInButton.addEventListener("click", signIn)
signUpButton.addEventListener("click", signUp)

signUpButtonPrompt.addEventListener("click", signInHome)
signInButtonPrompt.addEventListener("click", signUpHome)
newBlogButton.addEventListener("click", newBlogFunction)

