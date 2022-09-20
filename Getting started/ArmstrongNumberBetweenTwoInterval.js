// Example 
// Input : 10 1000
// Output : 153  370  371  407


var initialValue=10;
var finalValue=1000;
function isArmstrong(num){
   let rev=0;
   let rem;
   let num2=num;
    while(num2!=0){
       rem=num2%10;
       rev=rev+Math.pow(rem,3);
       num2=Math.floor(num2/10);
    }
   
    if(num==rev){
      return true;
    }

    return false;
    
    
}

function findOutTheArmstrongNumberBetweenRange(initialValue,finalValue){
 for(let i=initialValue;i<finalValue;i++){
   if(isArmstrong(i)){
      console.log(i);
   };
 }
}
findOutTheArmstrongNumberBetweenRange(initialValue,finalValue);

