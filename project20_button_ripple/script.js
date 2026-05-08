const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const xIn = e.clientX - e.target.offsetLeft
        const yIn = e.clientY - e.target.offsetTop
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yIn + 'px'
        circle.style.left = xIn + 'px'
        
        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})