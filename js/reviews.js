const navButtons1 = document.querySelector(".navigation-bar.first-bar")
const navButtons2 = document.querySelector(".navigation-bar.second-bar")
const navButtons3 = document.querySelector(".navigation-bar.third-bar")

const longBox = document.querySelector('.review-inner-box')
const longBoxScroll = document.querySelector('.review-box-outer')

let turn = 2

let switcheris = setInterval(()=>{
    if(turn === 1){
        navButtons1.classList.add("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.remove("activeBar")
        longBox.style.marginLeft = '0';
        return turn++
    }
    if(turn === 2){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.add("activeBar")
        navButtons3.classList.remove("activeBar")
        longBox.style.marginLeft = '-100%';
        return turn++
    }
    if(turn === 3){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.add("activeBar")
        longBox.style.marginLeft = '-200%';
        return turn = 1
    }
},3000)

navButtons1.addEventListener('click', ()=>{
    navButtons1.classList.add("activeBar")
    navButtons2.classList.remove("activeBar")
    navButtons3.classList.remove("activeBar")
    longBox.style.marginLeft = '0';
    clearInterval(switcheris)
})  
navButtons2.addEventListener('click', ()=>{
    navButtons1.classList.remove("activeBar")
    navButtons2.classList.add("activeBar")
    navButtons3.classList.remove("activeBar")
    longBox.style.marginLeft = '-100%';
    clearInterval(switcheris)
})  
navButtons3.addEventListener('click', ()=>{
    navButtons1.classList.remove("activeBar")
    navButtons2.classList.remove("activeBar")
    navButtons3.classList.add("activeBar")
    longBox.style.marginLeft = '-200%';
    clearInterval(switcheris)
})

// let isDown = false
// let startX
// let scrolledLeft

// longBoxScroll.addEventListener('mousedown', (e)=>{
//     isDown = true
//     startX = e.pageX - longBoxScroll.offsetLeft
//     scrolledLeft = longBoxScroll.scrollLeft
//     console.log(scrolledLeft);
//     longBox.style.marginLeft = '0';
//     turn = 0
// })
// longBoxScroll.addEventListener('mouseleave', ()=>{
//     isDown = false
// })
// longBoxScroll.addEventListener('mouseup', ()=>{
//     isDown = false
//     console.log(longBoxScroll.scrollLeft, "scrolll verte gale");
//     turn = 1
// })
// longBoxScroll.addEventListener('mousemove', (e)=>{
//     if(!isDown){
//         return
//     }
//     e.preventDefault()
//     let x = e.pageX - longBoxScroll.offsetLeft

//     let move = - (startX - x) * 2

//     longBoxScroll.scrollLeft = scrolledLeft - move
// })




