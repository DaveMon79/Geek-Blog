// Variables for update & delete comment buttons
const updateButton = document.getElementById("update")
const saveButton = document.getElementById("save-blog-button")
const blog = document.getElementById("blog-input").value



// Add new blog function 
const newBlog = async () => {

    const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({
            comment
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('');
    }

}


// Update existing blog function 
const updateBlog = async () => {

    const response = await fetch(`/api/blogs/:id`, {
        method: 'PUT',
        body: JSON.stringify({
            comment
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('');
    }

}


// Delete existing blog function 
const deleteBlog = async () => {
    const response = await fetch(`/api/blogs/:id`, {
        method: 'DELETE',
        body: JSON.stringify({
            comment
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('');
    }


}

saveButton.addEventListener('click', newBlog)
