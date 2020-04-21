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
function renderSkills1 (data) {
    let HTML = '';

    for(let i=0; i<data.length; i++){
    const skills2 = data[i];
    HTML +=`<div class="progress-bar">
                <p class="labels">${skills2.title}</p>
                <div class="skill-bar slideInLeft" style="width:${skills2.value}%">
                    <span class="skill-count">${skills2.value}%</span>
                </div>
            </div>
            `;
    }
   
    return HTML;
}
//kad po viena eitu
// function isInViewport(el) {
//     let elBottom = el.getBoundingClientRect().bottom - window.innerHeight;
//     if(elBottom < 0) {
//         return true;
//     }else{
//     return false;
//     }   
// }

//visi iskart eitu
function isInViewport(el) {
    let top = window.scrollY;

    if (top >= 1260) {
       return true;
    } else {
        return false;
    }
}
function barAnimation() {
    let array = document.getElementsByClassName('skill-bar');
    for(let i=0; i<array.length; i++) {
        if(isInViewport(array[i])) {
            array[i].style.visibility = 'visible';
            array[i].classList.add('progress-bar-animation');
        }
    }
}

document.querySelector('.progress-bar-row').innerHTML = renderSkills( skills );
document.querySelector('.progress-bar-row2').innerHTML = renderSkills1( skills2 );

window.onscroll = barAnimation;