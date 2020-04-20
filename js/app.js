/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var roll = document.getElementsByClassName("btn-roll");
roll[0].style.pointerEvents = "all";
var hold = document.getElementsByClassName("btn-hold");
var turn = true;
var sum1 = 0;
var sum2 = 0;
var total1 = 0;
var total2 = 0;
var dice = document.getElementsByClassName("dice");
var imge = [
  "",
  "images/dice-1.png",
  "images/dice-2.png",
  "images/dice-3.png",
  "images/dice-4.png",
  "images/dice-5.png",
  "images/dice-6.png",
];
function init() {
  roll[0].style.pointerEvents = "all";
  turn = true;
  sum1 = 0;
  sum2 = 0;
  total1 = 0;
  total2 = 0;
  var dice = document.getElementsByClassName("dice");
  document.getElementById("current-0").innerHTML = sum1;
  document.getElementById("current-1").innerHTML = sum2;
  document.getElementById("score-1").innerHTML = total2;
  document.getElementById("score-0").innerHTML = total1;
}

roll[0].addEventListener("click", () => {
  var rand = Math.floor(Math.random() * 6 + 1);
  dice[0].src = `${imge[rand]}`;
  if (turn) {
    if (rand == 1) {
      sum1 = 0;
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.add("active");
      turn = false;
    } else {
      sum1 += rand;
    }
    document.getElementById("current-0").innerHTML = sum1;
  } else {
    if (rand == 1) {
      sum2 = 0;
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".player-0-panel").classList.add("active");
      turn = true;
    } else {
      sum2 += rand;
    }
    document.getElementById("current-1").innerHTML = sum2;
  }
});
hold[0].addEventListener("click", () => {
  if (turn) {
    total1 += sum1;
    sum1 = 0;
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
    document.getElementById("score-0").innerHTML = total1;
    document.getElementById("current-0").innerHTML = sum1;
    turn = false;
    if (total1 >= 100) {
      document.querySelector(".player-1-panel").classList.remove("active");
      document.getElementById("name-0").style.color = "pink";
      document.getElementById("name-0").innerHTML = "WINNER";
      roll[0].style.pointerEvents = "none";
    }
  } else {
    total2 += sum2;
    sum2 = 0;
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.getElementById("current-1").innerHTML = sum2;
    document.getElementById("score-1").innerHTML = total2;
    turn = true;
    if (total2 >= 100) {
      document.querySelector(".player-0-panel").classList.remove("active");
      document.getElementById("name-0").style.color = "pink";
      document.getElementById("name-1").innerHTML = "WINNER";
      roll[0].style.pointerEvents = "none";
    }
  }
});
document.querySelector(".btn-new").addEventListener("click", init);
