// activity 1

let myBook ={
    title: "100 years of war on palestine",
    author:"Rashid Khalidi",
    publishYear : 2020,

}

console.log(myBook);

// task2 

console.log(myBook.title, myBook.author);

// task 3

myBook = {
    title: "100 Years of War on Palestine",
    author: "Rashid Khalidi",
    publishYear: 2020,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    
    updateYear: function(year){
        myBook.publishYear =year;
    }
};

// Log the result of calling the method
console.log(myBook.getDetails());

// task 4/

myBook.updateYear(2018);

console.log(myBook.publishYear);

// task 5

let library= {
    books:[
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publishYear: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            publishYear: 1949
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            publishYear: 1813
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            publishYear: 1925
        },
        {
            title: "Moby Dick",
            author: "Herman Melville",
            publishYear: 1851
        },
        {
            title: "War and Peace",
            author: "Leo Tolstoy",
            publishYear: 1869
        },
    ]
}

console.log(library);


// task 6

// Log the title of all books present in the library
library.books.forEach(book => {
    console.log(book.title);
});


// task 7
// library = {
//     books: [
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             publishYear: 1960
//         },
//         {
//             title: "1984",
//             author: "George Orwell",
//             publishYear: 1949
//         },
//         {
//             title: "Pride and Prejudice",
//             author: "Jane Austen",
//             publishYear: 1813
//         },
//         {
//             title: "The Great Gatsby",
//             author: "F. Scott Fitzgerald",
//             publishYear: 1925
//         },
//         {
//             title: "Moby Dick",
//             author: "Herman Melville",
//             publishYear: 1851
//         },
//         {
//             title: "War and Peace",
//             author: "Leo Tolstoy",
//             publishYear: 1869
//         },
//     ],
//     getBookDetails: function() {
//         return this.books.map(book => `${book.title} (${book.publishYear})`).join(", ");
//     }
// };

// // Call the method and log the result
// console.log(library.getBookDetails());


// Iterate over the properties of the library object
for (let property in library) {
    
        console.log(`${property}: ${library[property]}`);
    
}


// Log all keys of the library object
console.log("Keys:", Object.keys(library));

// Log all values of the library object
console.log("Values:", Object.values(library));