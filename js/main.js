"use strict";
let player1 = document.querySelector(".player-1");
let totalScore1 = document.getElementById("score-1");
let currentScore1 = document.getElementById("current-1");
let playerName1 = document.getElementById("name-1");
let player2 = document.querySelector(".player-2");
let totalScore2 = document.getElementById("score-2");
let currentScore2 = document.getElementById("current-2");
let playerName2 = document.getElementById("name-2");
let newGameBtn = document.querySelector(".btn-new");
let rollDiceBtn = document.querySelector(".btn-roll");
let holdScoreBtn = document.querySelector(".btn-hold");
let dice = document.querySelector(".dice");

const rollDice = () => {
  let randomDice = Math.floor(Math.random() * (1 * 6) + 1);
  dice.setAttribute("src", `images/dice-${randomDice}.png`);
  if (player1.classList.contains("player-active")) {
    if (randomDice != 1) {
      currentScore1.textContent =
        Number(currentScore1.textContent) + randomDice;
    } else {
      currentScore1.textContent = 0;
      player1.classList.remove("player-active");
      player2.classList.add("player-active");
    }
  } else {
    if (randomDice != 1) {
      currentScore2.textContent =
        Number(currentScore2.textContent) + randomDice;
    } else {
      currentScore2.textContent = 0;
      player2.classList.remove("player-active");
      player1.classList.add("player-active");
    }
  }
};

const holdScore = () => {
  if (player1.classList.contains("player-active")) {
    totalScore1.textContent =
      Number(currentScore1.textContent) + Number(totalScore1.textContent);
    currentScore1.textContent = 0;
    player1.classList.remove("player-active");
    player2.classList.add("player-active");
    if (totalScore1.textContent >= 100) {
      player1.classList.add("player-winner");
      playerName1.textContent = "Player 1 win";
      holdScoreBtn.disabled = true;
      rollDiceBtn.disabled = true;
    }
  } else {
    totalScore2.textContent =
      Number(currentScore2.textContent) + Number(totalScore2.textContent);
    currentScore2.textContent = 0;
    player2.classList.remove("player-active");
    player1.classList.add("player-active");
    if (totalScore2.textContent >= 100) {
      player2.classList.add("player-winner");
      playerName2.textContent = "Player 2 win";
      holdScoreBtn.disabled = true;
      rollDiceBtn.disabled = true;
    }
  }
};

const playAgain = () => {
  player1.classList.remove("player-winner");
  player2.classList.remove("player-winner");
  holdScoreBtn.disabled = false;
  rollDiceBtn.disabled = false;
  player1.classList.add("player-active");
  player2.classList.remove("player-active");
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  totalScore1.textContent = 0;
  totalScore2.textContent = 0;
};

rollDiceBtn.addEventListener("click", rollDice);
holdScoreBtn.addEventListener("click", holdScore);
newGameBtn.addEventListener("click", playAgain);
