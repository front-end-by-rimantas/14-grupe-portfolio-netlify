"use strict";

function renderPortfolio(list){
    let HTML = '';
    let filterHTML='';
    let galleryHTML='';
  
      //surenkame unikalius tagus
      let uniqueTags = [];
      for(let i=0; i<list.length; i++){
          const tags = list[i].tags;
          for(let t=0; t<tags.length;t++){
              if(uniqueTags.indexOf(tags[t].toLowerCase()) === -1){
                  uniqueTags.push(tags[t].toLowerCase());
              }
          }
      }
      
    //sugeneruoti filtravima
    filterHTML =`<div class="item active">All</div>`
    for(let i=0;i<uniqueTags.length; i++){
        filterHTML+=`<div class="item ">${uniqueTags[i]}</div>`
    };
    //sugeneruoti darbus

    for(let i=0; i<list.length;i++){
        const work=list[i];
        galleryHTML += `<div class="item size-${work.size}"
        data-tags = "${work.tags}">
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
 
    const filters = DOMgallery.querySelectorAll('.filter > .item');
        for(let i=0; i<filters.length; i++){
            const element=filters[i];
            element.addEventListener('click', filterGallery);
        };        
        return;
}
function filterGallery(event){
    document.querySelector('.filter > .item.active').classList.remove('active');
    event.target.classList.add('active');
    const filterTag = event.target.textContent;
    const works = document.querySelectorAll('.gallery > .list > .item');
    if(filterTag === 'All'){
        for(let i=0; i<works.length; i++){
           works[i].classList.remove('hide'); 
            
        }
        return;
    }
    
    for(let i=0; i<works.length; i++){
        const work = works[i];
       
        const hasTags = work.dataset.tags.split(',').indexOf(filterTag);
        if(hasTags >=0){
            work.classList.remove('hide');
        }else{
            work.classList.add('hide');
        }
        
    }
    
    
    
}

renderPortfolio(works);