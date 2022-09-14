const prompt = require('prompt-sync')({sigint: true});
let num = Number(prompt('Enter a number: '));
if(num%3 === 0 && num%5 === 0) {
    console.log('fizzbuzz');
} else if(num%3 === 0){
    console.log('fizz');
} else if(num%5 === 0) {
    console.log('buzz');
} else{
    console.log('The number entered is not divisable by 3 or 5');
}