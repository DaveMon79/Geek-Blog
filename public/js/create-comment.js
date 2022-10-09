
// Returns new comment handlebar with blog and user id's hidden
const form = async (event) => {
    event.preventDefault();

    const id = document.getElementById("blog_id").value
   console.log("hello", id)
    const response = await fetch(`/api/blogs/new-form/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
 
        document.location.replace(`/api/blogs/new-form/${id}`)
    } else {
        alert('Error');
    }


}




const commentButton = document.getElementById("make-comment").addEventListener("click", form)


