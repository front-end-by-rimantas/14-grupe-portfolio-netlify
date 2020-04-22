function manipulateLetter( list, wordIndex, letterIndex, actionType  ){
    const target = document.getElementById('text-animation');
    const timeStep = 100;
    const delayAfter = 1000;
    const delayBefore = 1000;
    const deleteTimeStep = 50;
    if ( actionType === 'add' ){
        target.classList.add('line');
        setTimeout(() => {
            target.textContent += list[wordIndex][letterIndex];
            if ( list[wordIndex].length > letterIndex + 1 ){
                manipulateLetter( list, wordIndex, letterIndex+1, actionType  )
            } else {
                manipulateLetter( list, wordIndex, letterIndex, 'delayAfter'  )
            }
        }, timeStep);
    }
    if ( actionType === 'delayAfter' ){
        setTimeout(() => {
                manipulateLetter( list, wordIndex, letterIndex+1, 'remove'  )          
        }, delayAfter);  
    }
    if ( actionType === 'remove' ){
        setTimeout(() => {
            const word = list[wordIndex];
            target.textContent = word.slice(0, letterIndex);
           
            if ( 0 <= letterIndex - 1 ){
                manipulateLetter( list, wordIndex, letterIndex-1, actionType  )
            } else {
                manipulateLetter( list, wordIndex, letterIndex, 'delayBefore'  )
            }
        }, deleteTimeStep);
    }
    if ( actionType === 'delayBefore' ){
        target.classList.remove('line');
        setTimeout(() => {
            if( wordIndex+1 === list.length ){
                manipulateLetter( list, 0, 0, 'add'  )          
            } else {
                manipulateLetter( list, wordIndex+1, 0, 'add'  )  
            }
    }, delayBefore);
    }
}

    manipulateLetter( heroes, 0, 0, 'add' );

   