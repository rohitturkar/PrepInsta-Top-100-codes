//Write a program to find out the given number is leap year or not

var year=2024;
if(isNaN(year)){
    console.log(`please enter the valid year`)
}
if(year%400==0 || ((year%100!=0)&&(year%4==0))){
    console.log(`the given year ${year} is leap year`)
}
else{
    console.log(`the given year ${year} is not a leap year`)
}