const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let nclick = 0

loveMe.addEventListener('dblclick', (e) => {
    createHeart(e)
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const xInside = e.clientX - e.target.offsetLeft
    const yInside = e.clientY - e.target.offsetTop

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
    times.innerHTML = ++nclick
    setTimeout(() => heart.remove(), 3000)
} 