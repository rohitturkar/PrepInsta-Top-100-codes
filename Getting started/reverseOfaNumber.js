// Example
// Input : 123
// Output : 321

let num=1234;
let reverse=0;
let rem;
while(num!=0){
     rem=num%10;
    reverse=reverse*10+rem;
    num=Math.floor(num/10);
  
}
  
console.log(reverse)