// Activity 1

for(let i=1;i<=10;i++){
    console.log(i);
}

// task2
let prod =1;
for(let i=1;i<=5;i++){
prod =5*i;
console.log(prod);
}

// activity 2

// sum of n numbers

let sum =0;

for(let i =1; i<=5;i++){
    sum = sum+i;
    
}
console.log(sum)

//task 3 using while loop


let i=1;
let summ =0;
while(i<=10){
    summ = summ +i
    i++
}
console.log(summ);


// task 4

let numb =10;
while(numb>=0){
    console.log(numb);
    numb--;
}

// Actuvity 3

let j =1;

do{
    console.log(j)
    j++;
} while(j<=5);


// task 6

let number =10;
let factorial = 1;
let k = 1;

do {
  factorial *= k;
  k++;
} while (i <= number);

console.log(`The factorial of ${number} is ${factorial}.`);


// Activuty 4

let trow = 5;
for (let row = 1; row <= trow; row++) {
  let str = "";
  for (let col = 1; col <= row; col++) {
    str += "* ";
  }
  console.log(str);
}

//  activity 5 task 8

for(let b =1; b<=10; b++){
    if(b===5) continue
else{
    console.log(b)
}
}

// activity 5 task 9

for(let c=1; c<=10;c++){
    if(c===7) break
    else console.log(c);
}


