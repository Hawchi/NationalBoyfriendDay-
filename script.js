document.getElementById("yesButton").addEventListener("click", showAlert);

function showAlert() {
    window.location.href = "yes-page.html";
}

var yesButton = document.getElementById("yesButton");
var no = document.getElementById("no");
var valentineImage = document.getElementById("valentineImage");

var noTexts = ["Are you sure?", "Please give me a chance pookie", "Pookie please", "Don't do this to me :(", "You're breaking my heart", "I'm gonna cry"];
var imageSources = ["https://pbs.twimg.com/media/Fyk7XMnaEAI3PsB.jpg", "https://i.pinimg.com/564x/54/c6/c9/54c6c9b6a81f76e3d2dcbbb2d22064a0.jpg", "https://i.pinimg.com/564x/5c/ba/f5/5cbaf50a51fb25a8d06958ae2884c575.jpg", "https://i.pinimg.com/736x/cb/d8/3b/cbd83b534a315e809a9da2b8cd3ac3bf.jpg"];

no.addEventListener("click", change);

function change() {
    var randomIndex = Math.floor(Math.random() * noTexts.length);
    var randomText = noTexts[randomIndex];
    no.innerText = randomText;

    var i = Math.floor(Math.random() * 1000) + 1;
    var j = Math.floor(Math.random() * 700) + 1;
    no.style.left = i + "px";
    no.style.top = j + "px";

    var currentWidth = yesButton.offsetWidth;
    var currentHeight = yesButton.offsetHeight
    yesButton.style.width = currentWidth + 30 + "px";
    yesButton.style.height = currentHeight + 10 + "px";

    var randomImageIndex = Math.floor(Math.random() * imageSources.length);
    valentineImage.src = imageSources[randomImageIndex];
}