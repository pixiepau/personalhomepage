
function submitForm(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const message = document.getElementById("message");

    if (fullName.trim() === "") {

        alert("Please enter your full name.");

    } else {

        alert(`Thank you, ${fullName}! Your message has been received. ♡`);

        message.value = "";

    }
}

function enterWebsite() {
    const welcomeScreen = document.getElementById("welcome-screen");

    if (welcomeScreen.classList.contains("opening")) {
        return;
    }

    welcomeScreen.classList.add("opening");

    setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 1400);
}
