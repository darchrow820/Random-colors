let $container = document.querySelector(".container");
let $start = document.querySelector("#start");
let $stop = document.getElementById("stop");
let $clear = document.querySelector("#clear");
let $interval = document.querySelector("#interval");
let $item = document.querySelectorAll(".box");
let $wrapper = document.querySelector(".preview-wrap");
let $preview = document.querySelector(".preview");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setupInterval() {
  return +$interval.value;
}

$start.addEventListener("click", function (e) {
  let colors = setInterval(() => {
    let box = document.createElement("div");
    box.classList.add("box");
    $container.insertAdjacentElement("beforeend", box);
    let color1 = getRandomIntInclusive(0, 255);
    let color2 = getRandomIntInclusive(0, 255);
    let color3 = getRandomIntInclusive(0, 255);
    box.style.backgroundColor =
      "rgb(" + color1 + ", " + color2 + ", " + color3 + ")";
    console.log(
      "background-color: " +
        "rgb(" +
        color1 +
        ", " +
        color2 +
        ", " +
        color3 +
        ");"
    );
  }, setupInterval());

  $stop.addEventListener("click", function (e) {
    clearInterval(colors);
  });

  $clear.addEventListener("click", function () {
    $container.innerHTML = "";
    clearInterval(colors);
  });
});

$container.addEventListener("click", itemToggle);

function itemToggle(event) {
  let tagName = event.target.classList.contains("box");
  // console.log(tagName);

  if (tagName) {
    let bg = event.target.style.backgroundColor;
    console.log(bg);
    console.log(event.target);

    // let preview = document.createElement("div");
    // preview.classList.add("preview");
    $preview.style.backgroundColor = bg;
    // console.log(preview);
    $wrapper.classList.remove("hide");
    $wrapper.insertAdjacentElement("beforeend", $preview);
  }
}

$(document).click(function (event) {
  var $target = $(event.target);
  if (!$target.closest(".preview").length && $(".preview").is(":visible")) {
    $(".preview-wrap").addClass("hide");
  }
});
