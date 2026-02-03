#!/usr/bin/node
const mySquare = "X"
const squareSize = process.argv[2];
const validSize = parseInt(squareSize);
if(isNaN(validSize)){
    console.log("Missing size");
} else{
    let count = 0;
    while (count < validSize){
        console.log(mySquare.repeat(validSize));
        count ++
    }
}