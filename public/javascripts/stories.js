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
    fetchStories()
    // code here
}

function createStory(story) {
  let template = `
   <div class="stories"> 
        <p>
            ${story.title} 
        </p>
        <p>
            ${story.story} 
        </p>
        <p>
            ${story.name} 
        </p>
        <p>
        <i class="far fa-thumbs-up"></i><a href="">${story.likes}</a>
        </p>
    </div>
  `
  let newArticle = document.createElement('article')
  newArticle.setAttribute('data-id', story.id)
  newArticle.innerHTML = template
  return newArticle
}

// function deleteStory(e) {
//   if (e.target.tagName === 'A') {
//     axios
//       .delete('/api/stories', { 
//         data: { id: e.target.closest('section').dataset.id } 
//       })
//       .then(res => {
//         e.target.closest('section').remove()
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