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

const saveButton = document.getElementById("save-blog-button").addEventListener('click', newBlog)