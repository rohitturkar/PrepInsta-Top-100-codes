// Example
// Input : 370
// Output : It's an Armstrong Number.

//An Armstrong number is one whose sum of digits raised to the power three equals the number itself. 371, for example, is an Armstrong number because 3**3 + 7**3 + 1**3 = 371

let num=371;
function armstrongNumber(num){
 let rev=0;
 let rem;
let num2=num;
 while(num2!=0){
    rem=num2%10;
    rev=rev+Math.pow(rem,3);
    num2=Math.floor(num2/10);
 }

 if(num==rev){
    console.log("this number is Armstrong number")
 }
 else{
    console.log("this number is  not a Armstrong number")
 }
}
armstrongNumber(num)
