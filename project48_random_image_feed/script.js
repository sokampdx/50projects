const container = document.querySelector('.container')
const imgURL = 'https://picsum.photos/'
const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${imgURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomN()}/${getRandomN()}/`
}

function getRandomN() {
    return Math.floor(Math.random() * 25) + 300
}

console.log(getRandomSize())