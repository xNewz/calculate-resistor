var res = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  purple: 7,
  gray: 8,
  white: 9,
  gold: 0.1,
  silver: 0.01,
};

// when user click cal button
document.getElementById("cal").addEventListener("click", function () {
  "use strict";
  var color1 = document.getElementById("first").value;
  var color2 = document.getElementById("second").value;
  var color3 = document.getElementById("third").value;
  var color4 = document.getElementById("fourth").value;

  // change color to value
  document.getElementById("first_div").style.backgroundColor =
    changeColor(color1);
  document.getElementById("second_div").style.backgroundColor =
    changeColor(color2);
  document.getElementById("third_div").style.backgroundColor =
    changeColor(color3);
  document.getElementById("fourth_div").style.backgroundColor =
    changeColor(color4);

  if (res[color3] == 0.1 || res[color3] == 0.01) {
    var resistance = (res[color1] * 10 + res[color2]) * res[color3];
  } else {
    var resistance =
      (res[color1] * 10 + res[color2]) * Math.pow(10, res[color3]);
  }
  // tolerance
  if (color4 == "gold") {
    var tolerance = " 5%";
  } else if (color4 == "silver") {
    var tolerance = " 10%";
  }

  if (resistance < 1000) {
    var prefix = "Ω";
    var resistance = Math.round(resistance * 100) / 100;
  } else if (resistance >= 1000 && resistance < 1000000) {
    var prefix = "kΩ";
    var resistance = Math.round((resistance / 1000) * 100) / 100;
  } else if (resistance >= 1000000 && resistance < 1000000000) {
    var prefix = "MΩ";
    var resistance = Math.round((resistance / 1000000) * 100) / 100;
  }

  // show value on id value
  document.getElementById("value").innerHTML = resistance + prefix + tolerance;
});

// when user click reset button
document.getElementById("reset").addEventListener("click", function () {
  "use strict";
  document.getElementById("first").value = "black";
  document.getElementById("second").value = "black";
  document.getElementById("third").value = "black";
  document.getElementById("fourth").value = "gold";

  // hide color
  document.getElementById("first_div").style.backgroundColor = "transparent";
  document.getElementById("second_div").style.backgroundColor = "transparent";
  document.getElementById("third_div").style.backgroundColor = "transparent";
  document.getElementById("fourth_div").style.backgroundColor = "transparent";

  // hide value
  document.getElementById("value").innerHTML = "";
});

function changeColor(color) {
  switch (color) {
    case "black":
      return "black";
    case "brown":
      return "brown";
    case "red":
      return "red";
    case "orange":
      return "orange";
    case "yellow":
      return "yellow";
    case "green":
      return "green";
    case "blue":
      return "blue";
    case "purple":
      return "purple";
    case "gold":
      return "gold";
    case "silver":
      return "silver";
    case "white":
      return "white";
    case "gray":
      return "gray";
  }
}
