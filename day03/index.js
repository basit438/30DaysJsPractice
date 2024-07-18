// Activity 01 If else Statements

// task1

let num =7;

if(num>0){
    console.log("Number is positive")
}else if(num===0){
    console.log("Number is zero");
}else if (num<0){
    console.log("Number is negative");
}

// task 2

let age =22;

if(age>=18){
    console.log("You are eligible to vote");
}else {
    console.log("You are not eligible to vote");
}

// Activity 2 Nested if else statements

function findLargest(a, b, c) {
    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }

    return largest;
}

let largest = findLargest(3,6,9);
console.log(largest);

largest%2 ===0 ? console.log("largest number is even") : console.log("largest number is odd")