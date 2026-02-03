#!/usr/bin/node
let myNumber = process.argv[2];
let myNewNumber = parseInt(myNumber);
if(isNaN(myNewNumber)){
    console.log("Not a number");
} else{
    console.log(myNewNumber);
}