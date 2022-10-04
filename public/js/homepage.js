// Sends user to home screen when clicked
const homeFunction = () => {
    console.log("home")
    document.location.replace('/')

}

// Creates a get request to show all user blogs
const dashboardFunction = () => {
    console.log("dashboard")
    document.location.replace('/api/blogs/:id')
}

// Displays the sign in page
const logInFunction = () => {
    document.location.replace('/sign-in')
}

// Displays the sign out page
const logOutFunction = () => {
    console.log("logout", logout)
    document.location.replace('/api/sign-out')
}


// const logout = document.getElementById("logout").addEventListener("click", logOutFunction)
const home = document.getElementById("home").addEventListener("click", homeFunction)
const dashboard = document.getElementById("dashboard").addEventListener("click", dashboardFunction)
const login = document.getElementById("login").addEventListener("click", logInFunction)

