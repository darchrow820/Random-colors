let $start = document.querySelector("#start");
let $game = document.querySelector("#game");
let $time = document.querySelector("#time");
let $timeHeader = document.querySelector("#time-header");
let $resultHeader = document.querySelector("#result-header");
let $result = document.querySelector("#result");
let $gameTime = document.querySelector("#game-time");

let score = 0;
let isGameStarted = false;

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);
$gameTime.addEventListener("input", setGameTime);

function startGame() {
  score = 0;
  setGameTime();
  $gameTime.setAttribute("disabled", true);
  isGameStarted = true;
  $game.style.backgroundColor = "#fff";
  $start.classList.add("hide");

  let interval = setInterval(function () {
    let time = parseFloat($time.textContent);
    // console.log("interval", $time.textContent);
    if (time <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      $time.textContent = (time - 0.1).toFixed(1);
    }
  }, 100);

  renderBox();
}

function setGameScore() {
  $result.textContent = score.toString();
}

function setGameTime() {
  let time = +$gameTime.value;
  $time.textContent = time.toFixed(1);
  $timeHeader.classList.remove("hide");
  $resultHeader.classList.add("hide");
}

function endGame() {
  isGameStarted = false;
  setGameScore();
  $gameTime.removeAttribute("disabled");
  $game.innerHTML = "";
  $start.classList.remove("hide");
  $game.style.backgroundColor = "#ccc";
  $timeHeader.classList.add("hide");
  $resultHeader.classList.remove("hide");
  $time.textContent = "5";
}

function handleBoxClick(e) {
  if (!isGameStarted) {
    return;
  }

  if (e.target.dataset.box) {
    renderBox();
    score++;
    // console.log(score);
  }
}

function renderBox() {
  $game.innerHTML = "";
  let box = document.createElement("div");
  let boxSize = getRandom(30, 100);
  let gameSize = $game.getBoundingClientRect();
  let maxTop = gameSize.height - boxSize;
  let maxLeft = gameSize.width - boxSize;
  let color1 = getRandom(0, 255);
  let color2 = getRandom(0, 255);
  let color3 = getRandom(0, 255);
  bgColor = "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";

  box.style.height = box.style.width = boxSize + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = bgColor;
  box.style.top = getRandom(0, maxTop) + "px";
  box.style.left = getRandom(0, maxLeft) + "px";
  box.style.cursor = "pointer";
  box.setAttribute("data-box", true);

  $game.insertAdjacentElement("afterbegin", box);
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
