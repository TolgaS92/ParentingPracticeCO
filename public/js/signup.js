const signupHandlerForm = async (event) => {
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
            document.location.replace('/profile/newchild');
        } else {
            alert('Failed to signup');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupHandlerForm);

const loginForm = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/sleepchart');
        } else {alert('Failed to log in')};
    }
};

document.querySelector('.login-form').addEventListener('submit', loginForm);

