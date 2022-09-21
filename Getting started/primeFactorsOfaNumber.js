let num = 12;

function isPrime(num) {
    for (let i = 2; i<num; i++) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}

function primeFactors(num){
   for(let i=2;i<num;i++){
    if(isPrime(i)==1){
        let x=num;
    while(x%i==0){
        console.log(i);
        x = x/i;
        
    }
    }
    }
   }
   primeFactors(num);