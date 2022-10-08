
// Add new comment function 
const form = async () => {

    const id = document.getElementById("blog_id").value
   console.log("hello", id)
    const response = await fetch(`/api/blogs/new-form/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
  
    } else {
        alert('Error');
    }



}

const commentButton = document.getElementById("make-comment").addEventListener("click", form)


// const saveButton = document.getElementById("save-comment-button").addEventListener("click", createNewComment)
// const comment = document.getElementById("save-comment-button").value
// const userId = document.getElementById("user_id").value
// const blogId = document.getElementById("blog_id").value