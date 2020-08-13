const newUserContainer = document.querySelector('#content')

function newUsers(event) {
    resetContent()
    let target = event.target
    target.classList.add('active')
    newUserContainer.appendChild(createNewUser())
}

function createNewUser() {
    let template = `
        <div class="login-signup">
            <h3>Sign Up</h3>
            <form onSubmit="addUser(event)" class="form-styling" action="" method="post">
                <label for="">Email<span class="required">*</span></label>
                <input name="email" type="text" placeholder="Email" autocomplete="off">
                <label for="">Password<span class="required">*</span></label>
                <input name="password" type="password" placeholder="Password" autocomplete="off">
                <button class="marble">Sign up</button>
                <p class="email-registered required">* Required fields</p>
            </form>
        </div>
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    return newArticle
}

function addUser(e) {
    e.preventDefault()
    var form = e.currentTarget
    var formDataObj = Object.fromEntries(new FormData(form).entries())
    if (validateEmail(formDataObj.email) && formDataObj.password !== '') {
        axios
            .post('/user/new', formDataObj)
            .then(res => {
                // console.log(res.data.message)
            if (res.status  === 201) {
                newUserContainer.appendChild(userCreated())
            } else {
                const emailRegistered = document.querySelector('.email-registered')
                emailRegistered.innerHTML = res.data.message
            }
        })
    } 
}

function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
    

function userCreated() {
    resetContent()
    let template = `
        <div class="login-signup">
            <h3>You have successfully signed up.</h3>
            <a onClick="home(event)" href="#">Home</a>
        </div> 
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    loggedIn.innerHTML = ''
    loggingout.innerHTML = 'Log out'
    signedUp.innerHTML = ''
    return newArticle
}