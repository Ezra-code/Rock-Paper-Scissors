let choice;

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
  } else if (choice == "Scissors") {
    console.log("you lost");
  } else {
    console.log("you Drew");
  }
  // computerChoice()
});
document.getElementById("rock").addEventListener("click", () => {
  computerChoice();
  console.log(choice);
  if (choice == "Paper") {
    console.log("you lost");
  } else if (choice == "Scissors") {
    console.log("you Won");
  } else {
    console.log("you Drew");
  }
});
document.getElementById("czrs").addEventListener("click", () => {
  computerChoice();
  console.log(choice);
  if (choice == "Paper") {
    console.log("you Won");
  } else if (choice == "Rock") {
    console.log("you Lost");
  } else {
    console.log("you Drew");
  }
});
