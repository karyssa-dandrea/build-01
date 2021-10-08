// import functions and grab DOM elements
const generateButton = document.getElementById('generate');
const answerDisplay = document.getElementById('answer-display');
// initialize global state
// set event listeners 
const randomNum = ()=>{
    return Math.ceil(Math.random() * 100);
};
generateButton.addEventListener('click', ()=>{
    answerDisplay.textContent = answerDisplay[randomNum];
});

console.log('click the button');

// get user input
// use user input to update state 
// update DOM to reflect the new state

