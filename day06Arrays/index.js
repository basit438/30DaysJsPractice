// Activity 1

// task1

let arr =[1,2,3,4,5];

console.log(arr);

// task2

console.log(arr[0], arr[4]);

// task3

arr.push(7);

console.log(arr);

// task4

arr.pop();

console.log(arr);


// task5

arr.shift();
console.log(arr);

// task6

arr.unshift(9);
console.log(arr);

// task 7------ map

let newArr = arr.map((num)=>{
return num*2;
})

console.log(newArr);


// task 8--------filter
let filteredArr = arr.filter((num)=>{
    return num>3;
})

console.log(filteredArr);

// task 9 -------Reduce

let total = arr.reduce((acc, currval)=>{
return acc +currval;
},0);

console.log(total);

// task 10

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


// task 11
arr.forEach(function(num){
    console.log(num);
})

// task 12

let myArray = 
 [[1, 2, 3], 
 [4, 5, 6],
 [7, 8, 9]];

 console.log(myArray);

//  task 13

console.log(myArray[1][1]);

