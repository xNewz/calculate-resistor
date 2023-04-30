var res = {
  ดำ: 0,
  น้ำตาล: 1,
  แดง: 2,
  ส้ม: 3,
  เหลือง: 4,
  เขียว: 5,
  น้ำเงิน: 6,
  ม่วง: 7,
  เทา: 8,
  ขาว: 9,
  ทอง: 0.1,
  เงิน: 0.01,
};

// add event listener on class select
document.querySelector(".select").addEventListener("change", function () {
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
  if (color4 == "ทอง") {
    var tolerance = " 5%";
  } else if (color4 == "เงิน") {
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

function changeColor(color) {
  switch (color) {
    case "ดำ":
      return "black";
    case "น้ำตาล":
      return "brown";
    case "แดง":
      return "red";
    case "ส้ม":
      return "orange";
    case "เหลือง":
      return "yellow";
    case "เขียว":
      return "green";
    case "น้ำเงิน":
      return "blue";
    case "ม่วง":
      return "purple";
    case "ทอง":
      return "gold";
    case "เงิน":
      return "silver";
    case "ขาว":
      return "white";
    case "เทา":
      return "gray";
  }
}
