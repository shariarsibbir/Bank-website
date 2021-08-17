// Adding a navigation when input a valid email & password 

document.getElementById('login-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const emailInput = userEmail.value
    const userPassword = document.getElementById('user-password');
    const passwordInput = userPassword.value;
        //hardcode condition(Though hardcode is not better way.)
    if( emailInput == 'webuser@email.com' && passwordInput == 'userPass059'){
        window.location.href = 'banking.html';
    }
    else {
        console.log('Input valid email & password');
    }
});