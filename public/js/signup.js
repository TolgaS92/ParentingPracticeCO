const loginHandlerForm = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const lastName = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (name && lastName && email && password) {
        console.log(name, lastName, email, password);
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, lastName, email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to signup');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', loginHandlerForm);