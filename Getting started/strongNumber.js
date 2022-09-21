// a strong Number is a number whose sum of factorial digits is equal to the number itself


// Example:- 

// number:-145;
// 1!+4!+5!=145
// so it is strong Number

let num=145;

function findOutFactorial(num){
    let factorial=1;
for(let i=1;i<=num;i++){
factorial=factorial*i;
}
return factorial;
}



function findOutStrongNumber(num){
let rem;
let sumOffactorial=0;
let x=num;
while(x!=0){
  rem=x%10;
  sumOffactorial=sumOffactorial+findOutFactorial(rem);
  x=Math.floor(x/10);
}

if(sumOffactorial==num){
    console.log("Strong Number "+sumOffactorial)
}else{
    console.log("Not a Strong Number "+sumOffactorial)
}
}

findOutStrongNumber(num)