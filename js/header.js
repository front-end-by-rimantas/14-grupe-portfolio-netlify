"use strict";

function renderNav() {
    let HTML = '';
    
    for ( let i=0; i<nav.length; i++ ) {
        let navData = nav[i];
        HTML += nav[i];
        
    }
    return document.querySelector('nav-links').innerHTML = HTML;
}

    function renderHeader() {
        let HTML = '';

        HTML = `<div class="header">
            <nav class="nav-bar col-12">
                <img src="./img/logo-2.png">
                <div class="nav-links">
                    <a href="#">${nav[0]}</a>
                    <a href="#">${nav[1]}</a>
                    <a href="#">${nav[2]}</a>
                    <a href="#">${nav[3]}</a>
                    <a href="#">${nav[4]}</a>
                    <a href="#">${nav[5]}</a>
                    <a href="#">${nav[6]}</a>
                </div>
            </nav>
        </div>`;

    
        document.querySelector('header').innerHTML = HTML;

        return HTML;
    }
   


renderHeader(nav);