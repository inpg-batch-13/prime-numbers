function isPrime(number) {
    for(var i = 2; i < number; i++){
        var bilangan = number % i 
        if(bilangan === 0) {
          return false
        }
      }
        return true
      }

function primeNumbers(maxNumber) {
    var bilangan = []
    for(var x = 1; x <= maxNumber; x++){
    var cek = isPrime(x)
    if(cek){
        bilangan.push(x)
    }    
}
    return bilangan
}



// TEST CASES:
console.log(primeNumbers(5)) // [1, 2, 3, 5]
console.log(primeNumbers(20)) // [1, 2, 3, 5, 7, 11, 13, 17, 19]
console.log(primeNumbers(2)) // [1, 2]