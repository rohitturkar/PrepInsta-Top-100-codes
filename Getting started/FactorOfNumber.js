//Write a program to find out the factors of a given numbers

//For example: 12;

let num=10;
function factorialOfNumber(num){

    for(let i=1;i<10;i++){
        if(num%i==0){
            console.log(i);
        }
    }

}

factorialOfNumber(num);