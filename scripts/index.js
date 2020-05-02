let zikirmatikCounter = document.getElementById("zikirmatikCounter");
let zikirmatikCounterIncrement = document.getElementById("increment");
let zikirmatikCounterDecrement = document.getElementById("decrement");
let zikirmatikCounterReset = document.getElementById("reset");
let zikirmatikCounterSave = document.getElementById("save");
let zikirmatikCounterRemoveButton = document.getElementById("removeCounterLimit");

document.addEventListener("keydown", checkKeyCode);

function checkKeyCode(e) {
  if (e.code == "ArrowRight" || e.code == "ArrowUp") {
    incrementCounter();
  } else if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
    decrementCounter();
  }
}

function incrementCounter() {
  let zikirmatikCounterValue = parseInt(zikirmatikCounter.innerHTML);
  if (zikirmatikCounterValue < arr[arrIndex] || arr.length == 0) {
    zikirmatikCounterValue = zikirmatikCounterValue + 1;
    zikirmatikCounter.innerHTML = zikirmatikCounterValue;
  } else {
    alert("Limite ulaştınız.");
  }
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
// audios
let bruh = new Audio();
bruh.src = "./movie_1.mp3";

let supriseMotherfucker = new Audio();
supriseMotherfucker.src = "./movie_2.mp3";

let erro = new Audio();
erro.src = "./erro.mp3";

// Saving Counter Values and Pushing them to table
let savedCounterValues = new Set();

function saveCounter() {
  let zikirmatikCounterValue = parseInt(zikirmatikCounter.innerHTML);
  savedCounterValues.add(zikirmatikCounterValue);
  function pushToTable() {
    // Creating Elements
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    // Creating text nodes for elements
    let i = savedCounterValues.size - 1;
    let counterNode = document.createTextNode(
      Array.from(savedCounterValues)[i]
    );
    let newDate = new Date();
    let dateNode =
      newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate();
    let hourNode = newDate.getHours() + ":" + newDate.getMinutes();
    // Appending text nodes to elements
    th.appendChild(counterNode);
    td.innerHTML = dateNode;
    td2.innerHTML = hourNode;
    // Appending elements to each other
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td2);
    // Appending entire row to table's body
    document.getElementById("tbody").appendChild(tr);
  }
  pushToTable();
}

let arr = [];
let arrIndex = arr.length;
function limitCounter() {
  limit = parseInt(prompt("Lütfen limit giriniz..."));
  let zikirmatikCounterValue = parseInt(zikirmatikCounter.innerHTML);
  console.log(limit);
  arr.push(limit);
  zikirmatikCounterRemoveButton.classList.toggle("d-none");
}

function removeCounterLimit() {
  if (arr.length == 0) {
    alert("Limit bulunmamaktadır...");
  } else {
    arr = [];
    alert("Limit başarıyla kaldırıldı...");
    zikirmatikCounterRemoveButton.classList.toggle("d-none");
  }
}
