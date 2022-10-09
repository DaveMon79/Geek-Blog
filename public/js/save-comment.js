// Add new comment function 
const newCommentFunction = async () => {

    const comment = document.getElementById("comment-input").value
    const userId = document.getElementById("user_id").value
    const blogId = document.getElementById("blog_id").value
    
        const response = await fetch(`/api/comment/create/${blogId}`, {
            method: 'POST',
            body: JSON.stringify({ 
                comment: comment,
                user_id: userId
                }),
            headers: { 'Content-Type': 'application/json'},
    
        });
        console.log("hello",comment, userId, blogId  )
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('');
        }
}

const newComment = document.getElementById("save-comment-button").addEventListener('click', newCommentFunction)