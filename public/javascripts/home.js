const homeBanner = document.querySelector(‘.banner’)
function home(event) {
    resetContent()
    let target = event.target
    target.classList.add(‘active’)
    homeBanner.style.background = `url(‘https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80’)`
    homeBanner.style.backgroundSize = ‘100%’
    displayCounter()
}
function displayCounter(){
    let counter = document.createElement(‘p’)
        counter.classList.add(‘counter’)
    let counterStatement = document.createElement(‘p’)
        counterStatement.classList.add(‘counterStatement’)
    var countDownDate = new Date(“Sep 13, 2020 00:00:00”).getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      counterStatement.innerHTML = “Days until VICTORIA comes out of STAGE 4 Lockdown: ”
      counter.innerHTML = days + “d ” + hours + “h ”
      + minutes + “m ” + seconds + “s “;
      if (distance < 0) {
        clearInterval(x);
        counter.innerHTML = “STAGE 4 Lockdown is OVER!!!“;
      }
    }, 1000);
    content.appendChild(counterStatement)
    content.appendChild(counter)
}
displayCounter()