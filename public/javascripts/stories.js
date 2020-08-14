const storiesContainer = document.querySelector('#content')
// we don't have inputs yet
// const newStoryTitle = document.querySelector('.new-story-title')
// const newStoryInput = document.querySelector('.new-story-input')
// const newStoryName = document.querySelector('.new-story-name')
// const newStoryLikes = document.querySelector('.new-story-likes')


function stories(event) {
    resetContent()
    let target = event.target
    target.classList.add('active')
    displayNewStoryButton()
    fetchStories()

} 

function displayNewStoryButton() {
  axios
    .get('/session')
    .then(res => {
      if (res.data.message === "logged in") {
          let template = `
            <button> Post your story </button>
            `
          let newStoryButton = document.createElement('div')
          newStoryButton.classList.add('post-story-btn')
          newStoryButton.innerHTML = template 
          newStoryButton.addEventListener('click', newStory)
          storiesContainer.appendChild(newStoryButton)
      }
    })
}

function displayUpdateStoryButton(userid) {
    let template = `
      <button onClick="updateStory(event, ${userid})"> Update your story </button>
    `
    let updateStoryButton = document.createElement('div')
    updateStoryButton.classList.add('update-story-btn')
    updateStoryButton.innerHTML = template
    // updateStoryButton.addEventListener('click', updateStory(event))
    return updateStoryButton
  // }
}

function displayDeleteStoryButton(id) {
    let template = `
      <button onClick="deleteStory(event, ${id})"> Delete your story </button>
    `
    let deleteStoryButton = document.createElement('div')
    deleteStoryButton.classList.add('delete-story-btn')
    deleteStoryButton.innerHTML = template 
    // deleteStoryButton.addEventListener('click', deleteStory(e))
    return deleteStoryButton
  // }
}

function createStory(story) {
  let template = `
   <div class="stories-div"> 
        <h1>
            ${story.title} 
        </h1>
        <p>
            ${story.story} 
        </p>
        <div class="story-tile-bottom">
          <p>
              ${story.name} 
          </p>
          <div>
            <i class="fas fa-thumbs-up"></i>
            <a href="#">${story.likes}</a>
          </div>
        </div>
    </div>
  `
  let newArticle = document.createElement('article')
  newArticle.setAttribute('data-id', story.id)
  newArticle.classList.add('story-tile')
  newArticle.innerHTML = template
  axios
    .get('/api/stories/story')
    .then(res => {
      if (story.userid === res.data.id) {
        newArticle.appendChild(displayUpdateStoryButton(story.id))
        newArticle.appendChild(displayDeleteStoryButton(story.id))
    }
  })
  return newArticle
}


function renderStories(res) {
  let stories = res.data.data
  stories.forEach(story => {
    storiesContainer.appendChild(createStory(story))
  })
}

function fetchStories() {
  const url = '/api/stories'
  axios.get(url).then(renderStories)
}

// storiesContainer.addEventListener('click', deleteStory)

// axios
//     .post('/api/stories', { title: newStoryTitle.value, story: newStoryInput.value, name: newStoryName.value })
//     .then(res => {
//       todoList.appendChild(createStory(res.data))