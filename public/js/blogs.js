
// Add new blog function 
const newBlog = async () => {

    const blogTitle = document.getElementById("blog-title").value
    const blog = document.getElementById("blog-input").value

    const response = await fetch('/api/blogs/new-blog', {
        method: 'POST',
        body: JSON.stringify({
            title: blogTitle,
            blog: blog
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

    const title = document.getElementById("blog-title").value.trim()
    const blog = document.getElementById("blog-text").value.trim()
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
   
    
    const response = await fetch(`/api/blogs/update-blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: title,
            blog: blog,
            
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
   
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Update failed');
    }

}


// Delete existing blog function 
const deleteBlog = async () => {

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/blogs/delete-blog/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: id
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


const deleteButton = document.getElementById('delete-comment').addEventListener('click', deleteBlog)
const updateButton = document.getElementById('update-comment').addEventListener('click', updateBlog)

