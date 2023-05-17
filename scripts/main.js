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
    document.querySelectorAll("button").forEach(element => element.classList.toggle("lightMode"));
    document.getElementById("toggleDarkMode").textContent = 
        (getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)") ?
        "開啟深色模式" : "關閉深色模式";
}

function toggleDarkMode() {
    // Unit test:
    // alert("Dark Mode");
    document.querySelectorAll("a[href]").forEach(element => {element.classList.toggle("darkMode")});
    document.querySelector("body").classList.toggle("darkMode");
    document.querySelectorAll("button").forEach(element => element.classList.toggle("darkMode"));
    document.getElementById("toggleDarkMode").textContent = 
        (getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)") ?
        "開啟深色模式" : "關閉深色模式"
}

// Font Display List/Grid Toggle
document.getElementById("toggleListGridView").addEventListener("click", () => {
    // Unit test:
    // alert("Grid View");
    document.getElementById("fontDisplay").classList.toggle("listView");
    document.getElementById("fontDisplay").classList.toggle("gridView");
    document.getElementById("toggleListGridView").textContent = 
        (document.getElementById("toggleListGridView").textContent === "格狀檢視") ?
        "列表檢視" : "格狀檢視"
});