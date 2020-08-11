const content = document.getElementById('content')
const activeLinks = document.querySelectorAll('a')

function resetContent() {
    activeLinks.forEach(link => {
        link.classList.remove('active')
    })
    content.innerHTML = ''
}