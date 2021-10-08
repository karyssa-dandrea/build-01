// import functions and grab DOM elements
const generateButton = document.getElementById('generate');
const text = document.getElementById('random-num');
// initialize global state
// set event listeners 
const randomNum = Math.floor(Math.random() * 100);

generateButton.addEventListener('click', ()=>{
    text.textContent = randomNum;
});

console.log('click the button');

// get user input
// use user input to update state 
// update DOM to reflect the new state

