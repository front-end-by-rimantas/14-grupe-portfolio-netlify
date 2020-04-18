"use strict";

const header = document.querySelector('header');
const navLink = document.querySelector('.nav-links > a');

window.onscroll = function() {
    let top = window.scrollY;
    let aColor = window.scrollY;

    if (top >= 500) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    if (aColor >= 500) {
        navLink.classList.add('ascroll')
    } else {
        navLink.classList.remove('ascroll');
    }
}