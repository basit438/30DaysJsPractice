// ES6+ features 

// Activity 1

let age =22;
let name = "Basit";

let str = `My name is${name} and i am ${age} years old`;

console.log(str);


// task 2

str = `${str}. multilbe text starts from here:orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
console.log(str);


// task 3

let arr =[1,2,3,4];

let [first, second] =arr;

console.log(first);

console.log(second);


// 4 task

const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
};

const { title, author } = book;

console.log(title);  // logs 'To Kill a Mockingbird'
console.log(author); // logs 'Harper Lee'

// task 5

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];

console.log(newArray); 

// task 6

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 8, 9, 8)); 


// task 7


function prod(a, b=1){
return a*b;

}

let product =prod(9);

console.log(product);

// Activity 5

// task8

// Define an object using enhanced object literals
const person = {
    // Properties
    firstName: 'John',
    lastName: 'Doe',
    age: 30,

    // Method to get full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method to display a greeting
    greet() {
        console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
    }
};

// Log the properties and methods to the console
console.log('First Name:', person.firstName);
console.log('Last Name:', person.lastName);
console.log('Age:', person.age);
console.log('Full Name:', person.getFullName());
person.greet(); // Call the greet method


// task 9

const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";
const propName4 = "hobby";

const personn = {
  [propName1]: "Basit",
  [propName2]: "Manzoor",
  [propName3]: 30,
  [propName4]: "Coding"
};

console.log(personn);
