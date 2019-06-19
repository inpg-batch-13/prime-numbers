function isPrime(number) {
    for (i = 2 ; i < number ; i++){

        var pembagian = number % i
        if (pembagian === 0){
          return false
        }
      }
      return true
}

function primeNumbers(maxNumber) {
    var hasil = []
for (var n = 1 ; n <= maxNumber ; n++){
    var cek = isPrime(n)
  
    if (cek){
        hasil.push(n)
    }
}
return hasil
}

// TEST CASES:
console.log(primeNumbers(5)) // [1, 2, 3, 5]
console.log(primeNumbers(20)) // [1, 2, 3, 5, 7, 11, 13, 17, 19]
console.log(primeNumbers(2)) // [1, 2]