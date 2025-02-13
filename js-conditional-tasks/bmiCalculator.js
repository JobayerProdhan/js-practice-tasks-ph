let weight = 60;
let height = 1.65;

let bmi = (weight)/(height*height);
console.log(bmi.toFixed(2)) // 22.04 : Your are normal

if(bmi<18.5){
    console.log('You are underweight')
}
else if (bmi<24.9 && bmi>=18.5){
    console.log('You are normal')
}
else if (bmi>=25 && bmi<=29.9){
    console.log('You are overweight')
}
else{
    console.log('You are obese')
}

