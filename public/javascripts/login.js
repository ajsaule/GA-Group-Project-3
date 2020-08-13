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
            <h3>Log in</h3>
            <form onSubmit="session(event)" class="form-styling" action="" method="post">
                <label for="">email</label>
                <input name="email" type="text" placeholder="Email" autocomplete="off">
                <label for="">password</label>
                <input name="password" type="password" placeholder="Password" autocomplete="off">
                <button class="marble">Login</button>
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
        }
    })
}

function confirmLogin(userId) {
    resetContent()
    let template = `
        <div class="login-signup">
            <h3>You have successfully logged in.</h3>
            <a onClick="home(event)" href="#">Home</a>
            <a onClick="deleteAccount(event)" class="delete-account" href="#" data-id="${userId}">DELETE ACCOUNT</a>
        </div>
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    loggedIn.innerHTML = ''
    loggingout.innerHTML = 'Log out'
    signedUp.innerHTML = ''
    return newArticle
}
