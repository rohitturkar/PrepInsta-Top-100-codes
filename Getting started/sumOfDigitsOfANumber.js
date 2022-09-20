// Example
// Input : 1234
// Output : 1 + 2 + 3 + 4 = 10


let num=1234;


function sumOfDigits(num){
    var sum=0;
    for(let i=0;i<num;i++){
        let rem=num%10;
        sum=sum+rem;
        num=num/10;
    }
    console.log(Math.round(sum))
}

sumOfDigits(num)