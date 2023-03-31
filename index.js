
// Write your code here

//describing the multiply function which multiplies 2 numbers
function multiplyFunction(){
    let num1 = 31;
    let num2 = 2;
    let multi = num1 * num2;
    const multiResult = 31 * 2;
    console.log(`result of the first multiply function is ${multiResult}`);
    console.log(`result of the second multiply function is ${multi}`);
    return multi;
}

//running, or executing the multiply function
multiplyFunction();

//describing the random function to get a random nuber greater than 0
function randomFunction(){
    let randomResult;
    randomResult = Math.floor(Math.random() * 100) + 1;
    if(randomResult > 0){
        console.log(`result of the random function is ${randomResult}`);
        return randomResult;
    }
    else if (randomResult <= 0){
        console.log("result is 0");
        return randomResult;
    }
}

//running, or executing the random function
randomFunction();

//describing the mod function for performing a modulus/remainder operation
function modFunction(){
    const modResult = 4 % 20;
    console.log(`result of the mod function is ${modResult}`);
    return modResult;
}

//running, or executing the mod function
modFunction();

//describing the max function to find out the largest number in a set
function maxFunction(){
    const maxResult = Math.max(17,18,19,20);
    console.log(`result of the max function is ${maxResult}`);
    return maxResult;
}

//running, or executing the max function
maxFunction();

// variable declaration for the unit tests, num 1, num2, num3 and num4 are also needed 
let num1 = 31;
let num2 = 2;
let num3 = 4;
let num4 = 20;
let multiply = num1 * num2; // is an equation whose multiplied results will equal 62
let random = Math.floor(Math.random()) + 1; // generates a random integer greater than 0
let mod = num3 % num4; // is an equation that calculates a remainder that is equal to 4
let max = Math.max(17,18,19,20); // will return 20 as the highest number in the set