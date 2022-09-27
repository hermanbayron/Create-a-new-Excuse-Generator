import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomItem = who[Math.floor(Math.random() * who.length)];
  console.log(randomItem);
  let randomItem2 = what[Math.floor(Math.random() * what.length)];
  console.log(randomItem2);
  let randomItem3 = when[Math.floor(Math.random() * when.length)];
  console.log(randomItem3);
  document.getElementById("excuse").innerHTML =
    randomItem + " " + randomItem2 + " " + randomItem3;
};
