let zikirmatikCounter = document.getElementById("zikirmatikCounter");
let zikirmatikCounterIncrement = document.getElementById("increment");
let zikirmatikCounterDecrement = document.getElementById("decrement");
let zikirmatikCounterReset = document.getElementById("reset");

function incrementCounter() {
  let zikirmatikCounterValue = parseInt(zikirmatikCounter.innerHTML);
  zikirmatikCounterValue = zikirmatikCounterValue + 1;
  zikirmatikCounter.innerHTML = zikirmatikCounterValue;
}

function decrementCounter() {
  let zikirmatikCounterValue = parseInt(zikirmatikCounter.innerHTML);
  if (zikirmatikCounterValue >= 1) {
    zikirmatikCounterValue = zikirmatikCounterValue - 1;
    zikirmatikCounter.innerHTML = zikirmatikCounterValue;
  }
}

function resetCounter() {
  let zikirmatikCounterValue = parseInt(zikirmatikCounter.innerHTML);
  zikirmatikCounterValue = 0;
  zikirmatikCounter.innerHTML = zikirmatikCounterValue;
}


let bruh = new Audio();
bruh.src = "./movie_1.mp3";

let supriseMotherfucker = new Audio();
supriseMotherfucker.src= "./movie_2.mp3";

let erro = new Audio();
erro.src = "./erro.mp3";