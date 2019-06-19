function isPrime (number) {
      for ( var i = 2; i < number; i++) {
        if ( number % i === 0) {
          return false
        }
      } return true; 
  }
  
function primeNumbers(maxNumber) {
    var arr = [];
    for ( var i = 1 ; i <= maxNumber; i++ ) {
        if ( isPrime(i) === true) {
            arr.push(i);
        }
    } return arr 
    // console.log(arr);
}

// TEST CASES:
console.log(primeNumbers(5)) // [1, 2, 3, 5]
console.log(primeNumbers(20)) // [1, 2, 3, 5, 7, 11, 13, 17, 19]
console.log(primeNumbers(2)) // [1, 2]