// let carYear = 2011;
// let personYear = 2001;
// let currentYear = 2021;
// function checkAge(year, name) {
//   let age = currentYear - year;
//   console.log(age);
//   console.log(name);
// }
// checkAge(carYear, "машина");
// checkAge(personYear, "человек");

// let color1 = getRandomIntInclusive(0, 255);
// let color2 = getRandomIntInclusive(0, 255);
// let color3 = getRandomIntInclusive(0, 255);

// Picks random color every 0.5s

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let box = document.getElementById("box");

box.addEventListener("click", function (e) {
  let colors = setInterval(() => {
    let color1 = getRandomIntInclusive(0, 255);
    let color2 = getRandomIntInclusive(0, 255);
    let color3 = getRandomIntInclusive(0, 255);
    this.style.backgroundColor =
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
  }, 500);

  let stopColor = document.getElementById("stop");
  stopColor.addEventListener("click", function (e) {
    clearInterval(colors);
  });
});

// background-color: rgb(4, 129, 169);
