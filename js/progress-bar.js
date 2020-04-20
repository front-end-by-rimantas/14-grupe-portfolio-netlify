"use strict";

function renderSkills (data) {
    let HTML = '';

    for(let i=0; i<data.length; i++){
    const skills = data[i];
    HTML +=`<div class="progress-bar">
                <p class="labels">${skills.title}</p>
                <div class="skill-bar slideInLeft" style="width:${skills.value}%">
                    <span class="skill-count">${skills.value}%</span>
                </div>
            </div>
            `;
    }
    return HTML;
}

function isInView(el) {
    let elBottom = el.getBoundingClientRect().bottom - window.innerHeight;
    if(elBottom < 0) {
        return true;
    } else {
        return false;
    }
}

function barAnimation() {
    let array = document.getElementsByClassName('skill-bar');
    for(let i=0; i<array.length; i++) {
        if(isInView(array[i])) {
            array[i].style.visibility = 'visible';
            array[i].classList.add('bar-animation');
        }
    }
}

document.querySelector('.progress-bar-row').innerHTML = renderSkills( skills );

window.onscroll = barAnimation;