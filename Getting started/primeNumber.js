//Write a programm to find out the prime number 

let num=4;

//the prime number are those number which are only divisible by itself and One.
if(num==0 || num<0){
    console.log("Enter the valid number")
}
if(num==1){
    console.log(`the given number ${num} is not a prime number`)
}
if(num>1){
  var isPrime=true;
  for(let i=2;i<num;i++){
    if(num%i==0){
      isPrime=false;
      break;
    }
    isPrime;
  }
 if(isPrime){
    console.log(`the given number  ${num} is prime number`)
 }
 else{
    console.log(`the given number  ${num} is not a prime number`)
 }
}