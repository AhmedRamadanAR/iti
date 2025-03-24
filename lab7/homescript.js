
function greetingUser(name) {
    if (name && isNaN(name)) {
        const greetingMessage = `Hello, ${name}!`;
        document.getElementById("greeting").innerHTML = greetingMessage;
        localStorage.setItem("userName", name);
    } else {
        alert("Invalid input! ");
    }
}

function updateColor(color) {
    document.getElementById("greeting").style.color = color;
    document.getElementById("color-input").value = color;
    localStorage.setItem("textColor", color);

}

function loadPersistedData() {
    const savedUserName = localStorage.getItem("userName");
    const savedColor = localStorage.getItem("textColor");
    if (savedUserName) {
        document.getElementById("greeting").innerHTML = `Hello, ${savedUserName}!`;
    }
    if (savedColor) {
        updateColor(savedColor);
    }
}

document.getElementById("username-btn").addEventListener("click", function () {
    const userName = prompt("Enter your name:");
    greetingUser(userName);
});

document.getElementById("clear-btn").addEventListener("click", function () {
    localStorage.removeItem("userName");
    document.getElementById("greeting").innerHTML = "Welcome Guest!";
});

document.getElementById("color-input").addEventListener("input", function () {
    updateColor(this.value);
});

document.addEventListener("DOMContentLoaded", function () {
    loadPersistedData();
    setTimeout(() => alert("Welcome"), 2000);
});

console.log(navigator.userAgent);
console.log(`Screen's Width and Height: ${screen.width} and ${screen.height}`);