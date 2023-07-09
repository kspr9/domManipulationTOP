
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


// Add the following elements to the container

// a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I\'m red!';
container.appendChild(paragraph);

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';
container.appendChild(h3);



// a <div> with a black border and pink background color with the following elements inside of it:
const div1 = document.createElement('div');
div1.style.border = '2px solid black';
div1.style.backgroundColor = 'pink';

//      another <h1> that says “I’m in a div”
const h1ForDiv1 = document.createElement('h1');
h1ForDiv1.textContent = 'I\'m in a div!';
div1.appendChild(h1ForDiv1);

//      a <p> that says “ME TOO!”
const pForDiv1 = document.createElement('p');
pForDiv1.textContent = 'ME TOO!';
div1.appendChild(pForDiv1);

//      Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
container.appendChild(div1);

// btn1 (not in html)
const btn = document.createElement('button');
btn.textContent = 'Click me!';
btn.onclick = () => {
    alert('Hello World!');
}
container.appendChild(btn);

// btn2
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

// btn3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
    alert("Hello World to you too");
});

// btn4

function alertFunction() {
  alert("Hello World baby one more time");
}

/*

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);

*/

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});