function showStep(id) {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function showMessage() {
  let name = document.getElementById("name").value;

  if (name.trim() === "") {
    alert("Please enter your name 💗");
    return;
  }

  document.getElementById("form").classList.add("hidden");
  document.getElementById("message").classList.remove("hidden");

  document.getElementById("hello").innerHTML =
    "Hey, " + name + " 💕";
}

function showProposal() {
  document.getElementById("message").classList.add("hidden");
  document.getElementById("proposal").classList.remove("hidden");
}

let noCount = 0;

function noClicked() {
  noCount++;

  let noBtn = document.getElementById("noBtn");
  let yesBtn = document.getElementById("yesBtn");

  noBtn.style.transform =
    "scale(" + Math.max(0.2, 1 - noCount * 0.05) + ")";

  yesBtn.style.transform =
    "scale(" + (1 + noCount * 0.07) + ")";

  if (noCount > 15) {
    noBtn.style.display = "none";
  }
}

function yesClicked() {
  document.getElementById("answer").innerHTML =
    "Yayyy! ❤️ I knew it! 🥹💗";

  createHearts();
}

function createHearts() {
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
      (3 + Math.random() * 4) + "s";

    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
}

setInterval(() => {
  let heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}, 800);
