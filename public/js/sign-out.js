
// Signs user out function
const signOut = async ()  => {
    
    const response = await fetch('/api/sign-out', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.getElementById('sign-out').addEventListener('click', signOut);