let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = () => {

    document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
        cookieBox.classList.add("hide");
    } else {
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
    }
}
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal");

checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

function welcome() {
    alert("Click on Register now to access the form  become a member of the community!")
}

function zoomin() {

    document.getElementById("home_button").style.fontSize = "x-large";
    document.getElementById("register_button").style.fontSize = "x-large";
    document.getElementById("book_button").style.fontSize = "x-large";
    document.getElementById("packages_button").style.fontSize = "x-large";
    document.getElementById("services_button").style.fontSize = "x-large";
    document.getElementById("gallery_button").style.fontSize = "x-large";
    document.getElementById("review_button").style.fontSize = "x-large";
}


function zoomout() {
    document.getElementById("home_button").style.fontSize = "initial";
    document.getElementById("register_button").style.fontSize = "initial";
    document.getElementById("book_button").style.fontSize = "initial";
    document.getElementById("packages_button").style.fontSize = "initial";
    document.getElementById("services_button").style.fontSize = "initial";
    document.getElementById("gallery_button").style.fontSize = "initial";
    document.getElementById("review_button").style.fontSize = "initial";
}