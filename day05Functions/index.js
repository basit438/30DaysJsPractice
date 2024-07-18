// Activity 1

function evenOddChecker(num){
    if(num%2===0) console.log(`${num} is even`);

    else console.log(`${num} is odd`);
}
evenOddChecker(7);

// task2 

function square(num){
    return num*num;
}

let squareroot  = square(5);
console.log(squareroot); 


// Activity 2

function maximumOfTwo(a,b){
if(a>b) console.log(`${a} is greater`);
    else console.log(`${b} is greater`);
}

maximumOfTwo(7,9);

// task 4

function concate(str1, str2){
return str1+ str2;
}

let concatedString = concate("hello", "world");
console.log(concatedString); 

// Activity 3

let sum =(a,b)=>{
    return a+b;
}


let summedVal =sum(7,8);
console.log(summedVal);


// Task6

let contains =(str, char)=>{
for(let i=0;i<str.length;i++){
    if(str.charAt[i]=== char) return true;
}return false;
}

 let itcontains =contains("Hello", 'g');
console.log(itcontains);

// Activity 4

// Task7

function multiply(a, b = 1) {
    return a * b;
}

// task 8

function greetPerson(name, age = 30) {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return greeting;
  }


//   Task 9

function repeat(times, fn) {
    for (let i = 0; i < times; i++) {
      fn();
    }
  }
  function fn(){
    console.log("hello world");
  }

  repeat(7, fn);