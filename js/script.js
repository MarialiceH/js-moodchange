var moodSelect = document.querySelector(".mood-select");
var body = document.querySelector("body");
var mood = "happy";

moodSelect.addEventListener("change", function (e) {
  mood = e.target.value;
  if (mood === "happy") {
    body.classList.add("happy");
    body.classList.remove("passionate");
    body.classList.remove("sad");
  } else if (mood === "sad") {
    body.classList.add("sad");
    body.classList.remove("happy");
    body.classList.remove("passionate");
  } else if (mood === "passionate") {
    body.classList.add("passionate");
    body.classList.remove("sad");
    body.classList.remove("happy");
  }
});
