function fizzbuzz() {
    let display = document.getElementById('display');
    let displayHTML = "";
  
    for (let i = 1; i <= 100; i++ ) { 
        if (i % 15 == 0){
        result = 'FizzBuzz';
        } else if (i % 3 == 0){
        result = 'Fizz';
        } else if (i % 5 == 0 ){
        result = 'Buzz';
        } else {
        result = i;
        }
        
      displayHTML += "<p>" + result + "</p>";
    }
    display.innerHTML = displayHTML
  }


