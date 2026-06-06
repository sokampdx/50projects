// const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.getElementById('replay')
const countdown = 50
const numsContainer = document.querySelector('.nums')

resetDOM()
runAnimation()

function resetDOM() {
    numsContainer.innerHTML = ''
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    for (var i = countdown; i >= 0; i--) {     
        var newnum = document.createElement('span')
        newnum.innerHTML = String(i)
        if (i === countdown) {
            newnum.classList.add('in')
        }
        numsContainer.appendChild(newnum)
    }

}

function runAnimation() {
    const nums = document.querySelectorAll('.nums span')
    const nextToLast = nums.length - 1
    nums.forEach((num, idx) => {
        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

