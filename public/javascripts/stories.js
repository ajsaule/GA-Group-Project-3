const storiesContainer = document.querySelector('#content');
const storiesBanner = document.querySelector('.banner');

function stories(event) {
    resetContent()
    let target = event.target
    target.classList.add('active')
    storiesBanner.style.background = `url('https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1532774821765-7403258cb2fa%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1050%26q%3D80')`
    storiesBanner.style.backgroundSize = '100%'
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
      <button class='update-story-btn' onClick="updateStory(event, ${userid})"> Update your story </button>
    `
    let updateStoryButton = document.createElement('p')
    updateStoryButton.innerHTML = template
    return updateStoryButton
  // }
}


function displayDeleteStoryButton(id) {
    let template = `
      <button class='delete-story-btn' onClick="deleteStory(event, ${id})"> Delete your story </button>
    `
    let deleteStoryButton = document.createElement('p')
    deleteStoryButton.innerHTML = template 
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
        if (story.userid === res.data.id ) {
            let editBtnsDiv = document.createElement('div')
            editBtnsDiv.classList.add('edit-btn-div')
            editBtnsDiv.appendChild(displayUpdateStoryButton(story.id))
            editBtnsDiv.appendChild(displayDeleteStoryButton(story.id))
            newArticle.appendChild(editBtnsDiv)
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