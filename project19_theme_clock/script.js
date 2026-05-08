const hourEle = document.querySelector('.hour')
const minEle = document.querySelector('.minute')
const secEle = document.querySelector('.second')
const timeEle = document.querySelector('.time')
const dateEle = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerText = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerText = 'Light mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEle.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minEle.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secEle.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEle.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEle.innerHTML = `${time.toLocaleString('en-us', { weekday: 'long'})}, ${time.toLocaleString('en-us', { month: 'long'})} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)