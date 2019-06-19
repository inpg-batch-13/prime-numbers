function isPrime(number) {

    for (var i = 2; i < number; i++){
        if (number % i === 0){
          return false
        }
      }
      return true

}



function primeNumbers(maxNumber) {
var result = []

  for (var n = 1; n <= maxNumber; n++){
    if (isPrime(n) === true){
      result.push(n)
    }
  }
return result
}

// TEST CASES:
console.log(primeNumbers(5)) // [1, 2, 3, 5]
console.log(primeNumbers(20)) // [1, 2, 3, 5, 7, 11, 13, 17, 19]
console.log(primeNumbers(2)) // [1, 2]