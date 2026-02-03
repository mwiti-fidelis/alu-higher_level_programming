#!/usr/bin/node
const argvsCount = process.argv.length - 2;

if(argvsCount === 0 ){
    console.log("No argument")
} else if(argvsCount === 1){
    console.log("Argument found")
} else {
    console.log("Arguments found")
}