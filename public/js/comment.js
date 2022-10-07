

// Add new comment function 
const newCommentFunction = async () => {

const comment = document.getElementById("comment-input").value
// console.log(req.session.user_id)
    const response = await fetch(`/api/comment/create`, {
        method: 'POST',
        body: JSON.stringify({ 
            comment: comment,

            }),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('');
    }

}


// Update existing comment function 
const updateComment = async () => {

    const response = await fetch(`/api/comment/:id`, {
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


// Delete existing comment function 
const deleteComment = async () => {
    const response = await fetch(`/api/comment/:id`, {
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

const newComment = document.getElementById("save-comment-button").addEventListener('click', newCommentFunction)