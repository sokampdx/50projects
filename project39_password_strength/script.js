const password = document.getElementById('password')
const email = document.getElementById('email')
const background = document.getElementById('background')
const submit = document.getElementById('submit')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const blurVal = 20 - (input.length * 2)

    background.style.filter = `blur(${blurVal}px)`
})

submit.addEventListener('click', () => {
    email.value = ''
    password.value = ''
    background.style.filter = `blur(20px)`
})