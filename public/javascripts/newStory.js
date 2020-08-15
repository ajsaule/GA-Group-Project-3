const newStoryContainer = document.querySelector('#content')

function newStory(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    newStoryContainer.appendChild(createNewStory())
}


function createNewStory() {
    let template = `
    
        <h2 class="story-edit-title">Submit your story here</h2>
        
        <form class ="new-story" onSubmit="addStory(event)" action="" method="post">

            <input class="forms" name="title" type="text" placeholder="Title">

            <textarea class="forms" name="story" type="varchar(1000)" placeholder="Share your story here"></textarea>

            <input class="forms" name="name" type="text" placeholder="First Name (optional)">
            
            <button class="login-btn">Share Your Story</button>

        </form>
    
    `
    let newArticle = document.createElement('article')

    newArticle.innerHTML = template
    return newArticle

}

var responseData = ''

function addStory(e) {
    e.preventDefault()
    var form = e.target
    var formDataObj = Object.fromEntries(new FormData(form).entries())

    axios
        .post('/api/stories', formDataObj )
        .then(res => { 
            form.querySelectorAll('input, textarea').forEach(tag => tag.value = '')
            storiesTab.click() 
            // creating some html on the page as response from Microsoft Text Analysis AI
            let aiRes = document.createElement('div')
            aiRes.classList.add('ai-response')
            aiRes.innerHTML = `${res.data.message}`
            newStoryContainer.appendChild(aiRes)
        })
}
