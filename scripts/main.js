// Dark Mode Toggle
document.getElementById("darkMode").addEventListener("click", () => {
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
    // alert("Light Mode");
    document.querySelectorAll("a").forEach(element => element.style.color = "#bbb");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.fontWeight = "300"
    document.querySelector("button").style.backgroundColor = "#222";
    document.querySelector("button").style.borderColor = "#ccc";
    document.querySelector("button").style.color = "#ccc";
    document.querySelector("button").textContent = "以淺色模式閱覽";
}

function toggleDarkModeOff() {
    // Unit test:
    // alert("Dark Mode");
    document.querySelectorAll("a").forEach(element => element.style.color = "#666");
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "#222";
    document.querySelector("body").style.fontWeight = "400"
    document.querySelector("button").style.backgroundColor = "white";
    document.querySelector("button").style.borderColor = "#444";
    document.querySelector("button").style.color = "#444";
    document.querySelector("button").textContent = "以深色模式閱覽";
}