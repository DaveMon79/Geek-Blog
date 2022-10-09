
// // Add new comment function 
// const newCommentFunction = async () => {

// const comment = document.getElementById("comment-input").value
// const userId = document.getElementById("user_id").value
// const blogId = document.getElementById("blog_id").value

//     const response = await fetch(`/api/comment/create/${blogId}`, {
//         method: 'POST',
//         body: JSON.stringify({ 
//             comment: comment,
//             user_id: userId
//             }),
//         headers: { 'Content-Type': 'application/json'},

//     });
//     console.log("hello",comment, userId, blogId  )
//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert('');
//     }

// }



// Updates existing comment function 
const updateComment = async () => {

    const userId = document.getElementById("user_id").value
    const blogId = document.getElementById("blog_id").value
    const id = document.getElementById("update").value
    const comment = document.getElementById("comment-text").value

    const response = await fetch(`/api/comment/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            comment: comment,
            blog_id: blogId,
            user_id: userId
                }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Comment updated');
    }

}


// Deletes existing comment function 
const deleteComment = async () => {

    const id = document.getElementById("delete").value
    
    const response = await fetch(`/api/comment/delete/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            where: {
                id: id
            }
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(id, "hello")
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('');
    }


}

const deleteButton = document.getElementById("delete").addEventListener('click', deleteComment)
const updateButton = document.getElementById("update").addEventListener('click', updateComment)
// const newComment = document.getElementById("save-comment-button").addEventListener('click', newCommentFunction)