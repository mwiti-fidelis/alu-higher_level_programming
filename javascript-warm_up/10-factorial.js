#!/usr/bin/node
const numbertoFactor = parseInt(process.argv[2]);

function factorial(n){
    if(isNaN(numbertoFactor) || n <= 1){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}
console.log(factorial(numbertoFactor));