const prompt = require('prompt-sync')({sigint: true});
let age = Number(prompt('Enter your age: '));
if(age < 16){
    console.log('You can\'t drive.');
} else if(age >= 16 && age <=17){
    console.log('You can drive but not vote.');
} else if(age >= 18 && age <= 24) {
    console.log('You can vote but not rent a car.');
} else{
    console.log('You can do pretty much anything.');
} 
