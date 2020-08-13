// const editStoryContainer = document.querySelector('#content')

function updateStory(event, userid) {
    resetContent()
    // event target here is just the <a> tag
    // let target = event.target
    // target.classList.add('active')
    // editStoryContainer.appendChild(editStory(userid))
}

// // function renderStories(res) {
// //     let stories = res.data.data
// //     stories.forEach(story => {
// //       storiesContainer.appendChild(createStory(story))
// //     })
// //   }
  
// function fetchStories() {
// }

// function editStory(userid) {
//     axios
//     .get('/api/stories/edit', { id: userid })
//     .then(res => {
//     res.data.story })
//     let template = `
    
//         <h2>Edit your story</h2>
        
//         <form class ="new-story" onSubmit="addStory(event)" action="" method="post">

//             <input name="title" type="text" value=${res.data.story.title}>

//             <textarea name="story" type="varchar(1000)" id="" cols="" rows="" value=${res.data.story.story}></textarea>

//             <input name="name" type="text" value=${res.data.story.name}>
            
//             <button class="share-story-btn">Edit Story</button>

//         </form>
    
//     `
//     let newArticle = document.createElement('article')
//     newArticle.innerHTML = template
//     return newArticle
// }
  
  
//   function deleteStory(event, userid) {
//     if (e.target.tagName === 'A') {
//       axios
//         .delete('/api/stories', { 
//           data: { id: e.target.closest('article').dataset.id } 
//         })
//         .then(res => {
//           e.target.closest('article').remove()
//         })
//     }
//   }
  