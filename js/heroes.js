// console.log(heroes);

function heroTextAnimation( heroesText  ){
    const target = document.getElementById('text-animation');
    target.textContent = '';

    const timeStep = 300;
    const delay = 2000;
    const deleteTimeStep = 150;

    let word = heroesText[0];
    for ( let i = 0; i < word.length; i++ ){
        const letter = word[i];
        setTimeout(() => {
            //logic
            target.textContent += letter;
        }, timeStep*i)
    }
    for ( let i = 0; i <= word.length; i++ ){
        const letter = word[i];
        setTimeout(() => {
            word = word.slice(0, -1);
            target.textContent = word;
        }, timeStep * word.length + delay + deleteTimeStep * i)
    }

    return;
}
heroTextAnimation( heroes );