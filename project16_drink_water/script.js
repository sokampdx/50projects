const smallcups = document.querySelectorAll('.cup-small')
const liter = document.getElementById('liters')
const percent = document.getElementById('percentage')
const remain = document.getElementById('remained')

updateBigCup()

smallcups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallcups.forEach((cup, i) => {
        if(i <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullcups = document.querySelectorAll('.cup-small.full').length
    const totalcups = smallcups.length
    
    if(fullcups === 0) {
        percent.style.visibility = 'hidden'
        percent.style.height = 0
    } else {
        percent.style.visibility = 'visible'
        percent.style.height = `${fullcups / totalcups * 330}px`
        percent.innerText = `${fullcups / totalcups * 100}%`
    }

    if(fullcups === totalcups) {
        remain.style.visibility = 'hidden'
        remain.style.height = 0
    } else {
        remain.style.visibility = 'visible'
        liter.innerText = `${2 - (250 * fullcups / 1000)}L`
    }
}