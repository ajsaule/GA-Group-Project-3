function food(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    // code here
    console.log('food')
    retrieveData()
}

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
        "from": "1",
        "sizes": "2"
        }
        })
        .then((response)=>{
            var foodResults = response.data.results
            console.log(response)
            // foodResults.forEach(recipe => {
            //     if(recipe.name && recipe.description && recipe.num_servings && recipe.prep_time_minutes && recipe.total_time_minutes && recipe.original_video_url) { 
            //         console.log(recipe.name)
            //         console.log(recipe.description)
            //         console.log(recipe.thumbnail_url)  
            //         console.log(recipe.num_servings)
            //         console.log(recipe.prep_time_minutes)
            //         console.log(recipe.total_time_minutes)  
            //         console.log(recipe.original_video_url)
            //     }                
            
        })
}