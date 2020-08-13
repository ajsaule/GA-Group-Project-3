function food(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    // code here
    retrieveData()
}

// creating randomise button 
var randomDiv = document.createElement('div')
randomDiv.classList.add('random-recipe-button')
var newFood = document.createElement('button')
newFood.textContent = 'Random Search'
newFood.addEventListener('click', randomSearch)
randomDiv.appendChild(newFood)
// content.appendChild(randomButton)
// newFood.innerHTML = 'Random Search'

function retrieveData() {
    axios({
        "method":"GET",
        "url":"https://tasty.p.rapidapi.com/recipes/list",
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"tasty.p.rapidapi.com",
            "x-rapidapi-key":"f4b5d309dbmshfc13cb7f654eb23p181331jsn4e6745a2178c",
            "useQueryString":true
        },"params":{
            "tags":"comfort_food",
            "from": Math.floor(Math.random()*1680),
            "size": 10
        }
    })
    .then((response)=>{
        var recipeDisplay = []
        var recipes = ''
        var foodResults = response.data.results
        console.log(foodResults)
        let foodDiv = document.createElement('div')
        foodDiv.classList.add('foodDiv')
        content.appendChild(randomDiv)
        content.appendChild(foodDiv)
        foodResults.forEach(recipe => {
            if(recipe.name && recipe.num_servings && recipe.original_video_url) { 
                recipeDisplay.push(recipe)
            }
            if(!recipe.description) {
                recipe.description = ""
            }                
        })
        recipeDisplay.forEach((recipe, index) => {
            var ingredients = recipe.sections[0].components
            var instructions = recipe.instructions
            let template = `
                <section class="food-tile">
                    <h3>${recipe.name}</h3> 
                    <video width="480" height="360" controls>
                        <source src="${recipe.original_video_url}">
                    </video>
                    <p>${recipe.description}</p>
                    <p class="bold">Number of Servings: ${recipe.num_servings}</p>
                    <p class="bold">List of Ingredients</p>
                    <ul class="recipe-list">
                        ${ingredients.map(ing => `<li>${ing.raw_text}</li>`).join('') }    
                    </ul>
                    <p class="bold">Instructions</p>
                    <ol class="description-list">
                        ${instructions.map(ins => `<li>${ins.display_text}</li>`).join('') } 
                    </ol>
                </section>
                `
            recipes += template
        })
    foodDiv.innerHTML = recipes
    }) 
}

function randomSearch() {
    resetContent()
    retrieveData()
}
