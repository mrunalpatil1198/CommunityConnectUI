console.log("inside login js")
function login() {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = {
      email,
      password
    };
    fetch('http://3.144.231.17/api/v1/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Invalid credentials');
      }
    })
    .then(data => {
      console.log('Success:', data);
      // Redirect the user to the homepage on successful login
      const id = data.id;
      const username = data.username;
      // Store id and username in session storage
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('username', username);
      // Redirect the user to the homepage on 
      window.location.href = 'homepage.html';
    })
    .catch((error) => {
      console.error('Error:', error);
      // Display an error message to the user
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = error.message;
    });
  }
  