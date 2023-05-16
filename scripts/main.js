// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
    // Unit test:
    // alert("Invoked Successfully.");
    // alert(getComputedStyle(document.body).backgroundColor);
    if (getComputedStyle(document.body).backgroundColor == "rgb(255, 255, 255)") {
        toggleDarkModeOn();
    } else {
        toggleDarkModeOff();
    }
});

function toggleDarkModeOn() {
    // Unit test:
    // alert("Dark Mode");
    document.querySelector("body").classList.add("darkMode");
    document.querySelector("button").classList.add("darkMode");
}

function toggleDarkModeOff() {
    // Unit test:
    // alert("White Mode");
    document.querySelector("body").classList.remove("darkMode");
    document.querySelector("button").classList.remove("darkMode");
}