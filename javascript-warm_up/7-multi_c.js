#!/usr/bin/node
const myLanguage = "C is fun";
const numberofRepeats = process.argv[2];
const newRepeats = parseInt(numberofRepeats);
if(isNaN(newRepeats)){
    console.log("Missing number of occurrences");
}else{
    let count = 0;
    while (count < newRepeats){
        console.log(myLanguage);
        count ++;
    }
}