function deleteAccount(event) {
    let target = event.target
    target.classList.add('active')
        axios
        .delete('/user/delete', {
            data: { id: target.dataset.id }
        })
        .then(res => {
            confirmLogout()
        })
}

function confirmLogout() {
    resetContent()
    let template = `
        <div class="login-signup">
            <h3>You have successfully closed your account.</h3>
            <a onClick="home(event)" href="#">Home</a>
        </div> 
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    loggedIn.innerHTML = 'Login'
    signedUp.innerHTML = 'Sign up'
    logout.innerHTML = ''
    return newArticle
}
