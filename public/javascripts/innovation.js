function innovation(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    // code here
    innovationReinvention()
}

function innovationReinvention() {
    let innDiv = document.createElement('div')
        innDiv.classList.add('innDiv')
        let innovationTemplate = `
            <section>
                <h2>Mental Health</h2>

                <h4>Support</h4>

                <h6><a href="www.lifeline.org.au">Lifeline Australia</a> - 13 11 14</h6>
                <p>A crisis support service offering short term support at any time for people who are having difficulty coping or staying safe.</p>

                <h6><a href="https://coronavirus.beyondblue.org.au">Beyond Blue</a> - 1800 512 348</h6>
                <p>Coronavirus Mental Wellbeing Support Service.</p>

                <h6><a href="https://coronavirus.beyondblue.org.au/">Eheadspace</a> - 1800 650 893</h6>
                <p>Online and webchat support and counselling for 12-25 year olds, their family and friends.</p>

                <h6><a href="https://careinmind.com.au/">Care in Mind</a></h6>
                <p>Online and phone counselling for people living, working, or studying in Melbourne's northern, central, and western suburbs. Phone: 1300 096 269 (24 hours a day, 7 days a week).</p>

                <h6><a href="https://mensline.org.au/">MensLine</a></h6>
                <p>Professional telephone and online support and information service for Australian men. Phone 1300 78 99 78 (24 hours a day, 7 days a week).</p>

                <h6><a href="https://mindspot.org.au/">Mindspot</a></h6>
                <p>Afree telephone and online service for people with stress, worry, anxiety, low mood or depression. It provides online assessment and treatment for anxiety and depression and can help you find local services. Call 1800 61 44 34 (8am - 8pm, Monday - Friday; 8am-6pm, Saturday)</p>

                <h6><a href="https://www.suicidecallbackservice.org.au/">Suicide Call Back Service</a></h6>
                <p>Mental health support, call back service: 1300 659 467 or online at suicidecallbackservice.org.au (24 hours a day, 7 days a week)</p>

                <h4>Youth Focused</h4>

                <h6><a href="www.headspace.org.au">Headspace</a></h6>
                <p>Call Headspace on 1800 650 890</p>

                <h6><a href="kidshelpline.com.au">Kids Helpline</a></h6>
                <p>Call Kids Helpline on 1800 55 1800</p>

                <h6><a href="reachout.com.au">ReachOut</a></h6>

                <h6><a href="sane.org">SANE Australia</a></h6>
                <p>Call SANE Australia on 1800 187 263</p>

                <h6><a href="https://www.orygen.org.au/Clinical-Care/Clinical-services/Moderated-Online-Social-Therapy">Orygen Digital</a></h6>
                <p>Call Orygen Digital on 1800 888 320</p>
            </section>

            
            <section>
                <h2>Education & Skills</h2>
            
            </section>

        `
        innDiv.innerHTML = innovationTemplate
        content.appendChild(innDiv)
}