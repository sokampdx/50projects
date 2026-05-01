const counters = document.querySelectorAll('.counter')
const duration = 200

counters.forEach((counter) => {
    counter.innerText = '0'
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = Math.ceil(target / duration)

        if (c < target) {
            counter.innerText = `${c + increment}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }

    }
    updateCounter()
})