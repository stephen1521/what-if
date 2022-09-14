const prompt = require('prompt-sync')({sigint: true});
let num = Number(prompt('Enter number of students: '));
let group3 = 0;
let group2 = 0;
if(num%3 === 0){
    group3 = num/3;
} else if(num%3 === 1) {
    group3 = (num-4)/3;
    group2 = 2;
} else{
    group3 = (num-2)/3;
    group2 = 1;
}
console.log(`The class would be divided into ${group3} groups of 3 and ${group2} groups of 2.`);
