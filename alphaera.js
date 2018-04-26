//Nav Bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Testimonial
var quotes = [
  'They got the necessary equipment for every work out. Equipment is always clean. Everyone in the gym is there to work out and help each other. They\'re hours accommodate people like me that work irregular hours, weekdays close at midnight. Plus the monthly fee is very affordable -Sal Orona',
  'You want results? go to the best. none other than alpha era fitness!!! -Joshua DiMaggio'
]

function newQuote(){
  var randomNumber = Math.floor(Math.random() *(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
