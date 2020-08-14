const resourcesBanner = document.querySelector('.banner');
function innovation(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    resourcesBanner.style.background = `url('https://images.unsplash.com/photo-1517346665566-17b938c7f3ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`
    resourcesBanner.style.backgroundSize = '100%'
    // code here
    innovationReinvention()
}

function innovationReinvention() {
    let innDiv = document.createElement('div')
        innDiv.classList.add('innDiv')
        let innovationTemplate = `
        <section class="in-tile">
            <h2 class="innovation-title">Skills and Education</h2>
            <h4><a class="resources-links" target="_blank" href="https://www.education.vic.gov.au/Pages/default.aspx">Victorian State Government - Education and Training</a></h4>
            <h4><a class="resources-links" target="_blank" href="https://www.coursera.org/coronavirus">Coursera - Take student learning online</a></h4>
            <h4><a class="resources-links" target="_blank" href="https://www.hellomagazine.com/healthandbeauty/health-and-fitness/2020040387411/productive-things-to-do-during-lockdown/">Hello Magazine - Skills and Activities</a></h4>
        </section>
        <section class="in-tile">          
            <h2 class="innovation-title">Support</h2>
            <h4><a class="resources-links" target="_blank" href="https://www.dhhs.vic.gov.au/financial-support-coronavirus-covid-19#extreme-hardship-support-program">Victorian State Government - Financial Support</a></h4>
            <h4><a class="resources-links" target="_blank" href="https://www.dhhs.vic.gov.au/covid-19-worker-support-payment">Victorian State Government - Test Isolation and worker support payments</a></h4>
            <h4><a class="resources-links" target="_blank" href="https://rentrelief.covid19.dhhs.vic.gov.au/">Victorian State Government - Rent Relief Grant</a></h4>
            <h4><a class="resources-links" target="_blank" href="https://www.servicesaustralia.gov.au/individuals/services/centrelink/coronavirus-supplement">Australian Government - Coronavirus Supplement</a></h4>
        </section>
        <section class="in-tile">
            <h2 class="innovation-title">Mental Health</h2>
            <h4><a class="resources-links" target="_blank" href="https://www.lifeline.org.au">Lifeline Australia</a> - 13 11 14</h4>
            <p>A crisis support service offering short term support at any time for people who are having difficulty coping or staying safe.</p>
            <h4><a class="resources-links" target="_blank" href="https://coronavirus.beyondblue.org.au">Beyond Blue</a> - 1800 512 348</h4>
            <p>Coronavirus Mental Wellbeing Support Service.</p>
            <h4><a class="resources-links" target="_blank" href="https://www.headspace.org.au/eheadspace/">Eheadspace</a> - 1800 650 893</h4>
            <p>Online and webchat support and counselling for 12-25 year olds, their family and friends.</p>
            <h4><a class="resources-links" target="_blank" href="https://careinmind.com.au/">Care in Mind</a></h4>
            <p>Online and phone counselling for people living, working, or studying in Melbourne's northern, central, and western suburbs. Phone: 1300 096 269 (24 hours a day, 7 days a week).</p>
            <h4><a class="resources-links" target="_blank" href="https://mensline.org.au/">MensLine</a></h4>
            <p>Professional telephone and online support and information service for Australian men. Phone 1300 78 99 78 (24 hours a day, 7 days a week).</p>
            <h4><a class="resources-links" target="_blank" href="https://mindspot.org.au/">Mindspot</a></h4>
            <p>Afree telephone and online service for people with stress, worry, anxiety, low mood or depression. It provides online assessment and treatment for anxiety and depression and can help you find local services. Call 1800 61 44 34 (8am - 8pm, Monday - Friday; 8am-6pm, Saturday)</p>
            <h4><a class="resources-links" target="_blank" href="https://www.suicidecallbackservice.org.au/">Suicide Call Back Service</a></h4>
            <p>Mental health support, call back service: 1300 659 467 or online at suicidecallbackservice.org.au (24 hours a day, 7 days a week)</p>
            <h4><a class="resources-links" target="_blank" href="https://www.headspace.org.au">Headspace</a></h4>
            <p>Call Headspace on 1800 650 890</p>
            <h4><a class="resources-links" target="_blank" href="https://kidshelpline.com.au">Kids Helpline</a></h4>
            <p>Call Kids Helpline on 1800 55 1800</p>
            <h4><a class="resources-links" target="_blank" href="https://reachout.com.au">ReachOut</a></h4>
            <h4><a class="resources-links" target="_blank" href="https://sane.org">SANE Australia</a></h4>
            <p>Call SANE Australia on 1800 187 263</p>
            <h4><a class="resources-links" target="_blank" href="https://www.orygen.org.au/Clinical-Care/Clinical-services/Moderated-Online-Social-Therapy">Orygen Digital</a></h4>
            <p>Call Orygen Digital on 1800 888 320</p>
        </section>
        <section class="in-tile">
            <h2 class="innovation-title">Physical Health</h2>
            <h4><a class="resources-links" target="_blank" href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/ongoing-support-during-coronavirus-covid-19/exercising-and-staying-active-during-coronavirus-covid-19-restrictions">Exercising and staying active during coronavirus (COVID-19) restrictions</a></h4>
            <p>While we keep our distance to stop the spread of COVID-19, staying active is critical for both our physical and mental health. Find out why it is so important, what you can and can’t do, and how to stay on track with your exercise routine.</p>
            <h4><a class="resources-links" target="_blank" href="https://www.sportaus.gov.au/findyour30/challenge">Find Your 30 at Home</a></h4>
            <p>During lockdown, you definitely have a free 30 minutes. However, sometimes it's not knowing what to do. Find Your 30 has plenty of tiny trainers to help you get on you way to a healthier lifestyle!</p>
            <h4><a class="resources-links" target="_blank" href="http://healthyweight.health.gov.au/wps/portal/Home/get-active/!ut/p/a1/lZAxb8IwEIX_CgyM1tmOcZwxBUSCmiwMxV4qN7ETF2KCZNHy7-tIXWnhpjvpPb3vHig4gPL66jod3Nnr03Qr_l7QzYZQRsot361wmYpaVDWhe87hDRSoxocx9CB7o0-hv82-jOv6MGvOPhgfFnjQzi9wZwLSTXBXM3nGxrUgDbXE2JYiIT4EYqklcRMMJRlLlstM2ES3EUJGCHxncvwQY5SstnnB0tfoYYLicv1SrNOswrjkv4I_ImRkSO-GVBz2Tz61-486fu0-LxeVx36nIr8DHB4ueBwGkdzQ0dY1UjKf_wBwtxHE/dl5/d5/L2dBISEvZ0FBIS9nQSEh/">Get Active - Healthy Weight Guide</a></h4>
            <p>Resources for establishing and planning physical activity habits and building more movement into your day.</p>
        </section>
        `
        innDiv.innerHTML = innovationTemplate
        content.appendChild(innDiv)
}