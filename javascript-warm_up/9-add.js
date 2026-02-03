#!/usr/bin/node
const firstNumber = parseInt(process.argv[2]);
const secondNumber = parseInt(process.argv[3]);

function add(a, b){
    let results = a + b;
    console.log(results);
}
add(firstNumber, secondNumber);