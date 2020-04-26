function renderData( numberList ) {
    let HTML = '';
    if ( !Array.isArray(numberList) ) {
        return console.error('Error');
    }
    if ( numberList.length === 0 ) {
        return console.error(tuscia);
    }
    for ( let i=0; i<numberList.length; i++ ) {
        const item = numberList[i];
        HTML += `<div class="achievements-box col-3 col-sm-6">
            <div class=" simbol fa fa-${item.simbol}"></div>
            <div class="number"
                data-number_from="0"
                data-number_to="${item.number}"
                data-time="3000">${item.number}</div>
            <div class="text">${item.text}</div>
        </div>`; 
    }
    return document.querySelector('#data').innerHTML = HTML;
}
        function achievementCounter( target ) {
            const targetList = document.querySelector( target );
            const counterAnimationStatus = targetList.dataset.animated_counter;
            if ( counterAnimationStatus && counterAnimationStatus === 'true' ) {
                return;
            }
            targetList.dataset.animated_counter = 'true';
        
            const numbersToAnimate = targetList.dataset.animated_numbers;
            if ( !numbersToAnimate || 
                 numbersToAnimate === '' ) {
                return;
            }
            const animations = targetList.querySelectorAll(numbersToAnimate);
            
            for ( let i=0; i<animations.length; i++ ) {
                const anime = animations[i];
                let countFrom = anime.dataset.number_from ? parseInt(anime.dataset.number_from): 0;
                let countTo = anime.dataset.number_to ? parseInt(anime.dataset.number_to) : 0;
                let time = anime.dataset.time ? parseInt(anime.dataset.time) : 0;
                const steps = 100;
        
                const allowedTimeUntis = ['s', 'ms'];
                let timeUnit = 'ms';
                if ( anime.dataset.time_unit && 
                    allowedTimeUntis.indexOf(anime.dataset.time_unit) !== -1 ) {
                    timeUnit = anime.dataset.time_unit;
                }
        
                anime.textContent = countFrom;
                let animationFrame = 0;
                const timer = setInterval( () => {
                    anime.textContent = Math.round((countTo - countFrom) / steps * animationFrame);
                    animationFrame++
                    if ( animationFrame === steps + 1 ) {
                        clearInterval(timer);
                    }
                }, time / (steps + 1));
            }
        } 
        renderData( data );

        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 2000){
    achievementCounter('#data');
}
});