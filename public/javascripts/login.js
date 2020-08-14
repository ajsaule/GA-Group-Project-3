const createlogin = document.querySelector('#content')
const loggedIn = document.querySelector('.login');
const loggingout = document.querySelector('.logout');
const signedUp = document.querySelector('.signup');

function logIn(event) {
    resetContent()
    let target = event.target
    target.classList.add('active')
    createlogin.appendChild(loginForm())
}

function loginForm() {
    let template = `
        <div class="login-signup">
            <h3>LOG IN</h3>
            <form onSubmit="session(event)" class="form-styling" action="" method="post">
                <input class="forms" name="email" type="text" placeholder="Email" autocomplete="off">
                <input class="forms" name="password" type="password" placeholder="Password" autocomplete="off">
                <button class="login-btn">Login</button>
            </form>
        </div>
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    return newArticle
}

function session(e) {
    e.preventDefault()
    var form = e.currentTarget
    var formDataObj = Object.fromEntries(new FormData(form).entries())
    axios.post('/session', formDataObj).then(res => {
        if (res.data.message === "logged in") {
            createlogin.appendChild(confirmLogin(res.data.id))
            renderLogin()
        }
    })
}

function confirmLogin(userId) {
    resetContent()
    let template = `
        <div class="login-signup">
            <h3>You have successfully logged in.</h3>
            <a class="forms" onClick="home(event)" href="#">Home</a>
            <a class="forms delete-account" onClick="deleteAccount(event)" href="#" data-id="${userId}"><i class="fas fa-user-minus"></i> DELETE ACCOUNT</a>
        </div>
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    return newArticle
}

function renderLogin() {
    axios
    .get('/session')
    .then(res => {
        if (res.data.message === "logged in") {
            loggedIn.innerHTML = ''
            loggingout.innerHTML = 'Log out'
            signedUp.innerHTML = ''
        } else {
            loggedIn.innerHTML = 'Log in'
            loggingout.innerHTML = ''
            signedUp.innerHTML = 'Sign up'
        }
    })
}

renderLogin()