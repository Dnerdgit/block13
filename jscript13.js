/*Is Truthy
Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

If the value is truthy, print true;
If the value is falsy, print the corresponding result:
"The boolean value false is falsy";
"The null value is falsy";
"undefined is falsy";
"The number 0 is falsy (the only falsy number)";
"The empty string is falsy (the only falsy string)";*/



const isTrue = true;

isTrue ? console.log("True") : console.log("The boolean is falsy");


const isNull = null;

isNull ? console.log("The null value is falsy"): console.log("Error");


const isFasly = false;

isFalsy ? console.log("The boolean value is falsy") : console.log("It can't be true");

const isZero = 0;

isZero === 0 ? console.log("The number zero is falsy (the only falsy number)") : console.log("One ?is? fasly");

const undef = undefined;

if (undef !== "String") {
    console.log("Undefined is falsy");
} else {
    console.log("IT must be a string");
}

const emptyq = "";

if (emptyq === " ") {
    console.log("Whitespace counts as a string");
} 
else {
    console.log("The empty string is falsy (the only falsy string)");
}




/*Number Line
Using if/else if/else statements, create a JavaScript code that takes the sum of two numbers and console log the corresponding result:

sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";*/

const num1 = 50;
const num2 = 51;
const sum3 = num1 + num2;

if (sum3 === 101) {
    console.log('101 is greater than 100');
} else {
    console.log('The sum is less than 100');
}

const num3 = 99;
const num4 = -2;
const sum5 = num3 + num4;

if (sum5 === 97) {
    console.log("97 is greater than 0");
} else {
    console.log("0 is greater than -97");
}

const num5 = 0;
const num6 = 101;
const sum7 = num5 + num6;

if (sum7 === 101) {
    console.log("101 is greater than 100");
} else {
    console.log("0 is greater than 101");
}

const num7 = 500;
const num8 = -500;
const sum9 = num7 + num8;

if (sum9 === 0) {
    console.log("0 is equal to 0");
} else {
    console.log("0 is not equal to 0");
}

const num9 = -1000;
const num0 = 0;
const sumA = num9 + num0;

if (sumA === -1000) {
    console.log("-1000 is a negative number");
} else {
    console.log("-1000 is a positive number");
}

const numA = -5;
const numB = 0;
const sumC = numA + numB

if (sumC === -5) {
    console.log("-5 is a negative number");
} else {
    console.log("-5 equals 5");
}



/*Greater Than Or Equal To 5
Using if/else statements, create a JavaScript code that console logs true if both parameters are greater or equal to 5.*/

const numE = 5;
const numF = 6;

if (numE >= 5 && numF >= 5) {
    console.log("true");
} else {
    console.log("false");
}

const numG = 10;
const numH = 11;

if (numG >= 5 && numH >= 5) {
    console.log("true");
} else {
    console.log("false");
}

const numI = 0;
const numJ = 0;

if (numI >= 5 && numJ >= 5) {
    console.log("true");
} else {
    console.log("false");
}

const numK = 1000;
const numL = -1000;

if (numK >= 5 && numL >= 5) {
    console.log("true");
} else {
    console.log("false");
}

const numM = 6;
const numN = 4;

if (numM >= 5 && numN >= 5) {
    console.log("true");
} else {
    console.log("false");
}

const numO = 5;
const numP = 5;

if (numO >= 5 && numP >= 5) {
    console.log("true");
} else {
    console.log("false");
}