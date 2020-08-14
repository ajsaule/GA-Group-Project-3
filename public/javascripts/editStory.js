const editStoryContainer = document.querySelector('#content')
// const deleteBtn = document.querySelectorAll('.delete-story-btn')

function updateStory(event, userid) {
    resetContent()
    let target = event.target
    target.classList.add('active')
    editStory(userid)
}

function editStory(userid) {
    axios
    .get('/api/stories/edit', {params: {id: userid} })
    .then(res => { 
    let template = `
    
        <h2 class="story-edit-title">Edit your story</h2>
        
        <form class="edit-story" onSubmit="replaceStory(event)" action="" method="post">

            <input class="forms" name="title" type="text" value=${res.data.data.title}>

            <textarea class="forms" name="story" type="varchar(1000)">${res.data.data.story}</textarea>

            <input class="forms" name="name" type="text" value=${res.data.data.name}>

            <input class="forms" type="hidden" name="id" value=${res.data.data.id}>
            
            <button class="login-btn">Edit Story</button>

        </form>
    
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    editStoryContainer.appendChild(newArticle)
    })
}

function replaceStory(e) {
    e.preventDefault()
    var form = e.target
    var formDataObj = Object.fromEntries(new FormData(form).entries())
    console.log(formDataObj)
    axios
        .patch('/api/stories', formDataObj)
        .then(res => { 
            form.querySelectorAll('input, textarea').forEach(tag => tag.value = '')
            storiesTab.click() 
        })
}
  
function deleteStory(e, id) {
    e.preventDefault()
    axios
        .delete('/api/stories', { 
            data: { id: e.target.closest('article').dataset.id } 
        })
        .then(res => {
            e.target.closest('article').remove()
        })
}