// Find the prime numbers in a given interval in javascript
// Example:-
// Input: 2 10
// output:- 2 3 5 7

var initialNumber=2;
var finalNumber=10
function isPrime(num){
    
    let isItPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isItPrime = false;
                break;
            }
        }
  if(isItPrime){
    return true;
  }
  else{
    return false;
  }
   
}

function findOutTotalPrimeNumber(initialValue,finalValue){
  for(let i=initialValue;i<=finalValue;i++){
    if(isPrime(i)){
    console.log(i)
    }
  }
}

findOutTotalPrimeNumber(initialNumber,finalNumber)