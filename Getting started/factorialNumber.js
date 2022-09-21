// factorial of n (n!) = 1 * 2 * 3 * 4....n


// Note : 0! = 1 and 1! = 1

// Example : 
// 5! = 1 * 2 * 3 * 4 * 5 = 120

let num=5;

function findOutFactorial(num){
    let factorial=1;
 for(let i=1;i<=num;i++){
    factorial=factorial*i;
 }

 return factorial;
}

console.log(findOutFactorial(num));