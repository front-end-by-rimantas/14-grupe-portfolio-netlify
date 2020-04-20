"use strict";

function renderHeader() {
    let HTML = '';

    HTML = `<div class="header">
        <nav class="nav-bar col-12">
            <div class="img"></div>
            <div class="nav-links">
            </div>
        </nav>
    </div>`;

    return document.querySelector('header').innerHTML = HTML;
}

function renderNav(nav) {
    let HTML = '';
    
    for ( let i=0; i<nav.length; i++ ) {
        HTML += `<a class="nav-a" href="#${nav[i]}">${nav[i]}</a>`
    }
    return document.querySelector('.nav-links').innerHTML = HTML;
}


renderHeader();
renderNav(nav)