let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// convert the navbars to an X by creating a new class named fa-time and make the navbar
// an active class
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}