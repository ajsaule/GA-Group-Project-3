const aboutUsContainer = document.querySelector('#content')

function about(event) {
    resetContent()
    let target = event.target
    target.classList.add('active')
    aboutUsContainer.appendChild(aboutUs())
}

function aboutUs() {
    let template = `
    <div class="in-tile">
        <p class="about-text">In the news and media we are constantly flooded with negative information about the COVID-19 pandemic.
        Whilst this is undoubtedly an incredibly difficult time, as a team of five developers we wanted to use our skills to create a positive and uplifting space for everyone.</>
        <p class="about-text">We did some brainstorming and each wrote down one word/phrase to describe something positive that has come out of this pandemic for us. Connection, Culture/Food, Positive Reinforcement, Innovation and Reinvention were top of mind.</p>
        <p class="about-text">Now more than ever we are finding ways to stay connected to our loved ones through social media, we use food to bring our families and friends together (virtually, of course!), we are upskilling and finding new ways to be resourceful and we are sharing stories about our positive experiences during this time.</p>
        <p class="about-text">We created a platform to share our stories, recipes that bring us comfort and resources for wellness and support.</p>
        <p class="about-text">We would love for you to join us and share your story.
        Welcome to The Happy Path! 😃</p>
        <p class="about-text-right">#positivevibesonly</p>
        <h4> The names that never made it </h4>
        <p class="about-text-center">
            <ul>
                <li>covid++</li>
                <li>Pandemic! At The Disco </li>
                <li>We get locked down, but we get up again! </li>
                <li>Covid positive </li>
                <li>COVID++ </li>
                <li>Powered by Positive Vibes </li>
                <li>Clean hands, positive vibes </li>
                <li>COVID.pop( )  </li>
                <li>posipost </li>
                <li>wall of positivity </li>
                <li>COVID.cheerful( ) </li>
                <li>COVID.pop("Positives") </li>
                <li>LovingLockdown </li>
                <li>Australians guide to the pandemic</li>
            </ul>
        </p>
        <p class="about-text-center">Made with ❤️ by sei-24 (aka. codeRona)</p>
    </div>    
    
    `
    let newArticle = document.createElement('article')
    newArticle.innerHTML = template
    return newArticle
}