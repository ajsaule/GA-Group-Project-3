function home(event) {
    resetContent()
    // event target here is just the <a> tag
    let target = event.target
    target.classList.add('active')
    // code here
    displayCounter()
}


function displayCounter(){

    let counter = document.createElement('p')
        counter.classList.add('counter')

    let counterStatement = document.createElement('p')
        counterStatement.classList.add('counterStatement')

    var countDownDate = new Date("Sep 13, 2020 00:00:00").getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
        
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      counterStatement.innerHTML = "Days until VICTORIA comes out of STAGE 4 Lockdown: "
        
      counter.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      if (distance < 0) {
        clearInterval(x);
        counter.innerHTML = "STAGE 4 Lockdown is OVER!!!";
      }
    }, 1000);

    content.appendChild(counterStatement)
    content.appendChild(counter)

}

