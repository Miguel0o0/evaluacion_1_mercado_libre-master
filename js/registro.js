let singUp = document.getElementById("singUp");
let singIn = document.getElementById("singIp");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

singIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    singUp.classList.add("disable");
    singIn.classList.remove("disable");
} 