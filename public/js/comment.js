// Variables for update & delete commeent buttons
const updateButton = document.getElementById("update")
const deleteButton = document.getElementById("delete")
const comment = document.getElementById("comment-input").value

// Add new comment function 
const newComment = async () => {

    const response = await fetch(`/api/comment`, {
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

updateButton.addEventListener('click', updateComment)
deleteButton.addEventListener('click', deleteComment)