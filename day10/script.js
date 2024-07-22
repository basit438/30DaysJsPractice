let body = document.querySelector('body');


// task1


let box1 = document.querySelector('#box1');

box1.addEventListener('click', (e)=>{
    box1.innerHTML =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi possimus suscipit, eveniet eaque iusto nulla sed atque quas dolorum. Soluta cum quo aperiam consectetur tempore aliquam eius, maiores voluptas. Fuga dolorum incidunt sed iusto? Doloremque dicta facilis cumque nam? Omnis debitis veniam suscipit sint!`
});


// task 2

const image = document.getElementById("toggleImage");

image.addEventListener("dblclick", function() {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});

// task 3

let box2 = document.querySelector('#box2');

box2.addEventListener('mouseover', (e)=>{
    box2.style.backgroundColor = `red`;
})

// task 4



box2.addEventListener('mouseout', (e)=>{
    box2.style.backgroundColor = ``;
})

// task 5


let input = document.querySelector('#input');

input.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`); // e.key is a property of the event object that contains the value of the key that was pressed.
});


// task 6


input.addEventListener('keyup',(e)=>{
    console.log(input.value);
})


// task 7

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Get the values from the input fields
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;

    // Log the values to the console
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
});


// task 8

const select = document.getElementById('mySelect');
    const display = document.getElementById('display');

    select.addEventListener('change', (e) => {
        // Get the selected value
        const selectedValue = e.target.value;

        // Display the selected value in the paragraph
        display.textContent = `Selected value: ${selectedValue}`;
    });



    // task 9


// Event Delegation: Handle clicks on list items

const myList = document.getElementById('myList');

myList.addEventListener('click', (e) => {
    
    if (e.target.tagName === 'LI') {
   
        console.log(`Clicked item: ${e.target.textContent}`);
    }
});


// task 10

const parent = document.getElementById('parent');
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');
    
    // Function to add a new item to the list
    function addItem() {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemList.children.length + 1}`;
        itemList.appendChild(newItem);
    }

    // Event delegation: Handle clicks on list items
    parent.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            console.log(`Clicked item: ${e.target.textContent}`);
        }
    });

    // Add event listener to the button to dynamically add items
    addButton.addEventListener('click', addItem);

