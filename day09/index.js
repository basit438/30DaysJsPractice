
let body = document.querySelector('body');

// Activity 1



let box = document.getElementById('box');

box.textContent ="this is box after changing the text content";

// task2

let box2 = document.querySelector('.div2');

box2.style.backgroundColor = "green";


// task 3

let newBox = document.createElement('div');

newBox.textContent ="this is text content of third div";

body.appendChild(newBox);

// task 4

let ul = document.querySelector('ul');

let li = document.createElement('li');
li.innerHTML =`li item`

ul.appendChild(li);

// task 5

body.removeChild(box);

// task 6

if(ul.lastChild){
    ul.removeChild(ul.lastChild);
}


// task 7

// let image1 = document.querySelector('image1')\;

// image1.src ='https://m.media-amazon.com/images/I/61Krpl7FGyL._AC_UF894,1000_QL80_.jpg';

// task 8

let box5 = document.querySelector('#div5');

box5.classList.add('boxclass');

// remove class

box5.classList.remove('boxclass');

// task 9

let btn = document.querySelector('button');

btn.addEventListener('click',(e)=>{
    box5.style.backgroundColor ='grey';
})

// task 10

box5.addEventListener('mouseover', (e) => {
    box5.style.border = '2px solid red';
});

box5.addEventListener('mouseout', (e) => {
    box5.style.border = ''; // Reset to original border
});




