console.log("inside js");
function submitForm() {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const apt = document.getElementById('apt').value;
    const password = document.getElementById('password').value;

    const data = {
        username: firstName + lastName,
        email,
        apartmentNumber: apt,
        password,
        postResourceList: []
    };
    console.log(data.username);
    console.log(JSON.stringify(data))
    fetch('http://3.144.231.17/api/v1/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.href = 'login.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
