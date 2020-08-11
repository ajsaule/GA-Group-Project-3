function home(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    // code here
}