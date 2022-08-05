let choice;
let winMsg = "You Won!!!"
let loseMsg = "You Lost!"
let drawMsg = "You drew!!"
let displayMsg = document.createElement('div')
function computerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let number = Math.floor(Math.random() * choices.length);
  choice = choices[number];
  return choice;
}

document.getElementById("paper").addEventListener("click", () => {
  computerChoice();
  console.log(choice);
  if (choice == "Rock") {
      console.log("you won");
      displayMsg.innerHTML = `<h3 class="win">${winMsg}</h3>`
      document.querySelector('.container').appendChild(displayMsg)
  } else if (choice == "Scissors") {
      console.log("you lost");
        displayMsg.innerHTML = `<h3 class="lose">${loseMsg}</h3>`;
        document.querySelector(".container").appendChild(displayMsg);
  } else {
      console.log("you Drew");
        displayMsg.innerHTML = `<h3 class="draw">${drawMsg}</h3>`;
        document.querySelector(".container").appendChild(displayMsg);
  }
  // computerChoice()
});
document.getElementById("rock").addEventListener("click", () => {
  computerChoice();
  console.log(choice);
  if (choice == "Paper") {
      console.log("you lost");
        displayMsg.innerHTML = `<h3 class="lose">${loseMsg}</h3>`;
        document.querySelector(".container").appendChild(displayMsg);
      
  } else if (choice == "Scissors") {
      console.log("you Won");
        displayMsg.innerHTML = `<h3 class="win">${winMsg}</h3>`;
        document.querySelector(".container").appendChild(displayMsg);
  } else {
      console.log("you Drew");
        displayMsg.innerHTML = `<h3 class="draw">${drawMsg}</h3>`;
        document.querySelector(".container").appendChild(displayMsg);
  }
});
document.getElementById("czrs").addEventListener("click", () => {
  computerChoice();
  console.log(choice);
  if (choice == "Paper") {
      console.log("you Won");
      displayMsg.innerHTML = `<h3 class="lose">${loseMsg}</h3>`;
      document.querySelector(".container").appendChild(displayMsg);
  } else if (choice == "Rock") {
    console.log("you Lost");
  } else {
    console.log("you Drew");
  }
});
