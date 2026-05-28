const resultEle = document.getElementById('result')
const lengthEle = document.getElementById('length')
const upperEle = document.getElementById('uppercase')
const lowerEle = document.getElementById('lowercase')
const numberEle = document.getElementById('numbers')
const symbolEle = document.getElementById('symbols')
const generateEle = document.getElementById('generate')
const clipboardEle = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEle.addEventListener('click', () => {
    const password = resultEle.innerText

    if (!password) { return }

    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard')
    }).catch(err => {
        console.error('Failed to copy: ', err)
    })
})

generateEle.addEventListener('click', () => {
    const length = +lengthEle.value
    const hasLower = lowerEle.checked
    const hasUpper = upperEle.checked
    const hasNumber = numberEle.checked
    const hasSymbol = symbolEle.checked

    resultEle.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesMap = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if (typesMap.length === 0) {
        return ''
    }

    for(let i = 0; i < length; i++) {
        const funcName = Object.keys(typesMap[Math.floor(Math.random() * typesMap.length)])[0]
        generatedPassword += randomFunc[funcName]()
        console.log(funcName)
        console.log(generatedPassword)
    }
    return generatedPassword
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
