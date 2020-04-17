"use strict";

function renderHeader() {
    let HTML = '';

    HTML = `<div class="header">
                <nav class="nav-bar col-12">
                    <img src="./img/logo-2.png">
                    <div class="nav-links">
                        <a href="#">${nav}</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                        <a href="#">link</a>
                    </div>
                </nav>
            </div>`;

            document.querySelector('header').innerHTML = HTML;

    return HTML;
}

renderHeader(nav);