const storiesContainer = document.querySelector('#content')
// we don't have inputs yet
// const newStoryTitle = document.querySelector('.new-story-title')
// const newStoryInput = document.querySelector('.new-story-input')
// const newStoryName = document.querySelector('.new-story-name')
// const newStoryLikes = document.querySelector('.new-story-likes')


function stories(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    storiesContainer.appendChild(displayNewStoryButton())
    fetchStories()
    // code here
}

// if logged on statement to go here. If logged on, then they can see the displayNewStoryButton, else hide button. 

function displayNewStoryButton() {
  let template = `
  <button> Post your story </button>
  `
  let newStoryButton = document.createElement('div')
  newStoryButton.classList.add('post-story-btn')
  newStoryButton.innerHTML = template 
  newStoryButton.addEventListener('click', newStory)
  return newStoryButton
}

function createStory(story) {
  let template = `
   <div class="story-tile"> 
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
            <i class="far fa-thumbs-up"></i>
            <a href="#">${story.likes}</a>
          </div>
        </div>
    </div>
  `
  let newArticle = document.createElement('article')
  newArticle.setAttribute('data-id', story.id)
  newArticle.innerHTML = template
  return newArticle
}

// if logged on statement to go here. If logged on, then they can delete their own story, else hide button. 

// function deleteStory(e) {
//   if (e.target.tagName === 'A') {
//     axios
//       .delete('/api/stories', { 
//         data: { id: e.target.closest('article').dataset.id } 
//       })
//       .then(res => {
//         e.target.closest('article').remove()
//       })
//   }
// }

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