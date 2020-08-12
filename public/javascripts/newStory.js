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
    
        <h2>Submit your story here</h2>
        
        <form class ="new-story" onSubmit="addStory(event)" action="" method="post">

            <input name="title" type="text" placeholder="Title">

            <textarea name="story" type="varchar(1000)" id="" cols="" rows="" placeholder="Share your story here"></textarea>

            <input name="name" type="text" placeholder="First Name (optional)">
            
            <button class="share-story-btn">Share Your Story</button>

        </form>
    
    `
    let newArticle = document.createElement('article')

    newArticle.innerHTML = template
    return newArticle

}

function addStory(e) {
    e.preventDefault()
    var form = e.target
    var formDataObj = Object.fromEntries(new FormData(form).entries())
    console.log(formDataObj)
    axios
        .post('/api/stories', formDataObj )
        .then(res => { 
            form.querySelectorAll('input, textarea').forEach(tag => tag.value = '')
            storiesTab.click() 
        })
}
