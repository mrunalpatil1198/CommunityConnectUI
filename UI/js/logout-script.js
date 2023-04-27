function logout() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('username');
    // redirect to the login page or homepage
    window.location.href = 'login.html'; // replace with the URL of your login page
}