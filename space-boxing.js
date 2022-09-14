const prompt = require('prompt-sync')({sigint: true});
let weight = Number(prompt('Enter your earth weight: '));
let planet = Number(prompt('Enter planet number: '));
let bool = true;
let str = "";
if(planet === 1) {
    weight *= 0.78;
    str = 'Venus';
} else if (planet === 2) {
    weight *= 0.39;
    str = 'Mars';
} else if (planet === 3) {
    weight *= 2.65;
    str = 'Jupiter';
} else if (planet === 4) {
    weight *= 1.17;
    str = 'Saturn';
} else if (planet === 5) {
    weight *= 1.05;
    str = 'Uranus';
} else if (planet === 6) {
    weight *= 1.23;
    str = 'Neptune';
} else{
    console.log('Invalid planet number');
    bool = false;
}
if(bool){
    console.log(`Your weight on planet ${str} is ${weight} lbs.`);
}
