// Dark Mode Default Button Text
if (window.matchMedia("prefers-color-scheme: dark")) {
    document.getElementById("toggleDarkMode").textContent = "關閉深色模式"
} else {
    document.getElementById("toggleDarkMode").textContent = "開啟深色模式"
}

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
    // Unit test:
    // alert("Invoked Successfully.");
    // alert(getComputedStyle(document.body).backgroundColor);
    if (window.matchMedia("prefers-color-scheme: dark")) {
        toggleLightMode();
    } else {
        toggleDarkMode();
    }
});

function toggleLightMode() {
    // Unit test:
    // alert("Light Mode");
    document.querySelectorAll("a[href]").forEach(element => {element.classList.toggle("lightMode")});
    document.querySelector("body").classList.toggle("lightMode");
    document.querySelector("button").classList.toggle("lightMode");
    document.getElementById("toggleDarkMode").textContent = 
        (getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)") ?
        "開啟深色模式" : "關閉深色模式";
}

function toggleDarkMode() {
    // Unit test:
    // alert("Dark Mode");
    document.querySelectorAll("a[href]").forEach(element => {element.classList.toggle("darkMode")});
    document.querySelector("body").classList.toggle("darkMode");
    document.querySelector("button").classList.toggle("darkMode");
    document.getElementById("toggleDarkMode").textContent = 
    (getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)") ?
    "開啟深色模式" : "關閉深色模式"
}