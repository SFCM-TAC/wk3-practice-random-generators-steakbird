
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator() {
  // YOUR CODE HERE
}

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
const diceRollGenerator = null;
const eightBallGenerator = null;

function handleDiceRoll() {
  const resultElement = document.getElementById('diceResult');
var diceResult = Math.random() * 6;
//generates a random number between 0 and 5
var roundedNumber = Math.ceil(diceResult);
//rounds that number up to 1 - 6
  // TODO: call a method on diceRollGenerator to populate result with a random value
  const result = roundedNumber;
  resultElement.innerHTML = result;
}

const  resultList = new Object();
resultList.first = 'Absolutely!';
resultList.second = 'Without a doubt';
resultList.third  = 'Hmm, Im not so sure about that one..';
resultList.fourth ='No';
resultList.fifth  = 'If you believe enough';
resultList.sixth = 'You should ask 1 more time...';


function getAnswer() {
      var diceResult = Math.random() * 6;
    //generates a random number between 0 and 5
    var roundedNumber = Math.ceil(diceResult);
return roundedNumber;
};
getAnswer();
if ( getAnswer === 1) {
resultList.first;
}
    else if (getAnswer > 1){
        document.write("I dunno buddy, you tell me");
    }


  // TODO: call a method on eightBallGenerator to populate result with a random value
function handleEightBallShake(){
  const result = getAnswer();
  resultElement.innerHTML = result;
}
handleEightBallShake();

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
