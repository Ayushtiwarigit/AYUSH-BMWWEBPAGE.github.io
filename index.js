const containerEl = document.getElementById("container");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const blackBtn = document.getElementById("black");

redBtn.onclick = function () {
  containerEl.style.backgroundImage = "url('BMW1.png')";
};
blueBtn.onclick = function () {
  containerEl.style.backgroundImage = "url('BMW2.png')";
};
blackBtn.onclick = function () {
  containerEl.style.backgroundImage ="url('BMW3.png')";
};

