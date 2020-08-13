const content = document.getElementById('content')
const activeLinks = document.querySelectorAll('a')
const activeHome = document.querySelector('.fa-home')

function resetContent() {
    activeLinks.forEach(link => {
        link.classList.remove('active')
    })
    activeHome.classList.remove('active')
    content.innerHTML = ''
}