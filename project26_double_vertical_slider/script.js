const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const dnBtn = document.querySelector('.down-button')
const slidesLen = rightSlide.querySelectorAll('div').length

let activeSlideIdx = 0
let up = 1
let down = -1

leftSlide.style.top = `-${(slidesLen - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide(up))
dnBtn.addEventListener('click', () => changeSlide(down))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    activeSlideIdx = ((activeSlideIdx + direction) + slidesLen) % slidesLen
    rightSlide.style.transform = `translateY(-${activeSlideIdx * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`
}