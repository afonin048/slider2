const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const sidebar = document.querySelector('.sidebar')
const slidesCount = sidebar.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount-1) * 100}vh`
let activeSlidesIndex = 0

upBtn.addEventListener('click', ()=>{
    changeSlides('up')
})

downBtn.addEventListener('click', ()=>{
changeSlides('down')
})

function changeSlides (direction){
    if (direction === 'up'){
        activeSlidesIndex++
        if (activeSlidesIndex === slidesCount){
            activeSlidesIndex = 0
        }
    }
    else if (direction === 'down'){
        activeSlidesIndex--
        if (activeSlidesIndex < 0){
            activeSlidesIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlidesIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlidesIndex * height}px)`
}