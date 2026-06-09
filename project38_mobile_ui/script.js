const imgs = document.querySelectorAll('.content')
const navs = document.querySelectorAll('nav ul li')


navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        clearAll()

        imgs[idx].classList.add('show')
        nav.classList.add('active')
    })
})

function clearAll() {
    imgs.forEach(img => img.classList.remove('show') )
    navs.forEach(nav => nav.classList.remove('active'))
}