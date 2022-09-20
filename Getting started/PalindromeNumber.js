// Example
// Input : 121
// Output : Palindrome

let num=121;
let rev=0;
let rem;
let num2=num;
 if(num2>0){
  while(num2!=0){
    rem=num2%10;
    rev=rev*10+rem;
    num2=Math.floor(num2/10);
  }

  if(num==rev){
    console.log("this is palindrome")
  }else{
    console.log("this is not a palindrome")
  }
 }


