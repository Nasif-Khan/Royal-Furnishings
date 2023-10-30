var navBarSignupBtn = document.querySelector('.signup');

var modalBox = document.querySelector('.forms-wrapper');
var x_btn = document.querySelector('.x-btn');
var signup_btn = document.querySelector('.show-signup-form');
var login_btn = document.querySelector('.show-login-form');
login_btn.classList.remove('show-login-form');

navBarSignupBtn.addEventListener('click', function (){
    modalBox.style.visibility = 'visible';
    document.querySelector('.container').classList.add('inactive');
    modalBox.classList.add('animation-in');
} );

x_btn.addEventListener('click', function (){
    modalBox.style.visibility = 'hidden';
    document.querySelector('.container').classList.remove('inactive');
    modalBox.classList.remove('animation-in');
} );

login_btn.addEventListener('click', function (){
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
    signup_btn.classList.remove('show-signup-form');
    login_btn.classList.add('show-login-form');
} );

signup_btn.addEventListener('click', function (){
    document.querySelector('.signup-form').style.display = 'block';
    document.querySelector('.login-form').style.display = 'none';
    login_btn.classList.remove('show-login-form');
    signup_btn.classList.add('show-signup-form');
} );


