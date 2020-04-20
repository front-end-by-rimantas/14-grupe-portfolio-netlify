"use strict";

const header = document.querySelector('header');
const navLink = document.querySelectorAll('.nav-a');
const headerImg = document.querySelector('.nav-bar .img');

window.onscroll = function() {
    let top = window.scrollY;

    if (top >= 500) {
        header.classList.add('active');

        for(let i = 0; i<navLink.length;i++){
            navLink[i].classList.add('nav-b')
        };

        headerImg.classList.add('logo2');

    } else {
        header.classList.remove('active');
        
        for(let i = 0; i<navLink.length;i++){
            navLink[i].classList.remove('nav-b')
        };

        headerImg.classList.remove('logo2');
    }

    // if (top >=300 ) {
    //     header.style.display="none";
    // } 
    // else if (top <= 50) {
    //     header.style.display="inline-block";
    // }

}

