"use strict";

function renderPortfolio(list){
    let HTML = '';
    let filterHTML='';
    let galleryHTML='';
  
    //sugeneruoti filtravima
    filterHTML =`<div class="item">filter</div>
            <div class="item">filter</div>
            <div class="item">filter</div>
            <div class="item">filter</div>
            <div class="item">filter</div>`;
    //sugeneruoti darbus

    for(let i=0; i<list.length;i++){
        const work=list[i];
        galleryHTML += `<div class="item size-${work.size}">
                            <img src="./img/portfolio/${work.photo}" alt="${work.title}">
                            <div class="hover"> 
                                <div class = "text">
                                    <p>${work.title}</p>
                                    <span class = "icon-1">
                                        <a href= "#">
                                        <i class=" fa ${work.icon1}" ></i>
                                        </a>
                                    </span>
                                    <span class = "icon-2">
                                        <a href= "./img/portfolio/${work.photo}">
                                        <i class="fa ${work.icon2}"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>`;

    }
    //apjungti viska i vientisa HTML

    HTML+= `<div class="gallery">
                <div class="filter"> 
                ${filterHTML}
                </div>
                <div class="list"> 
                ${galleryHTML}
                </div>  
            </div>`;
    //Pilna HTML iterpiame i DOM
    const DOMgallery = document.querySelector('#portfolio-gallery');
    DOMgallery.innerHTML = HTML;

    //prikabinti event listenerius, kad galetu filtruoti darbus
    
    return;
}

renderPortfolio(works);