// Dark Mode Default Button Text
if (window.matchMedia("prefers-color-scheme: dark")) {
    document.getElementById("toggleDarkMode").textContent = "關閉深色模式"
} else {
    document.getElementById("toggleDarkMode").textContent = "開啟深色模式"
};

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
    document.querySelectorAll("input").forEach(element => element.classList.toggle("lightMode"));
    document.querySelectorAll("select").forEach(element => element.classList.toggle("lightMode"));
    document.getElementById("toggleDarkMode").textContent = 
        (getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)") ?
        "開啟深色模式" : "關閉深色模式";
};

function toggleDarkMode() {
    // Unit test:
    // alert("Dark Mode");
    document.querySelectorAll("a[href]").forEach(element => {element.classList.toggle("darkMode")});
    document.querySelector("body").classList.toggle("darkMode");
    document.querySelectorAll("button").forEach(element => element.classList.toggle("darkMode"));
    document.querySelectorAll("input").forEach(element => element.classList.toggle("darkMode"));
    document.querySelectorAll("select").forEach(element => element.classList.toggle("darkMode"));
    document.getElementById("toggleDarkMode").textContent = 
        (getComputedStyle(document.body).backgroundColor === "rgb(255, 255, 255)") ?
        "開啟深色模式" : "關閉深色模式"
};

// Font Display: List/Grid Toggle
document.getElementById("toggleListGridView").addEventListener("click", () => {
    // Unit test:
    // alert("Grid View");
    document.getElementById("fontDisplay").classList.toggle("listView");
    document.getElementById("fontDisplay").classList.toggle("gridView");
    document.getElementById("toggleListGridView").textContent = 
        (document.getElementById("toggleListGridView").textContent === "格狀檢視") ?
        "列表檢視" : "格狀檢視"
});

// Font Display: Modify Display Text
document.getElementById("modDisplayText").addEventListener("input", () => {
    document.querySelectorAll("#fontDisplay dd").forEach(
        element => element.textContent =
        document.getElementById("modDisplayText").value.toString());
});
document.getElementById("modDisplayText").addEventListener("focusout", () => {
    if (document.getElementById("modDisplayText").value === "")
    document.querySelectorAll("#fontDisplay dd").forEach(
        element => element.textContent = "法律之前人人平等，並有權享受法律的平等保護，不受任何歧視。人人有權享受平等保護，以免受違反本宣言的任何歧視行為以及煽動這種歧視的任何行為之害。")
});

// Font Display: Modify Display Font Size

    // Set initial display size auto-select:
    let isSelected = false;

        // If a matching option is present, it is selected.
        document.querySelectorAll("#modDisplayFontSize option").forEach(
            element => {
                if (element.textContent === window.getComputedStyle(document.body).getPropertyValue("font-size")) {
                    element.setAttribute("selected", true);
                    isSelected = true;
                }
            }
        )
        /* If no matching option is present, a new option is:
        created and added to the dropdown menu,
        assigned text content with computed font size,
        selected and
        sorted. */
        if (isSelected === false) {
            let newOption = document.getElementById("modDisplayFontSize").appendChild(document.createElement("option"));
            newOption.textContent = window.getComputedStyle(document.body).getPropertyValue("font-size");
            newOption.setAttribute("selected", true);
            let optionArray = Array.from(
                document.getElementById("modDisplayFontSize").options
            );
            // Unit test:
            // alert(optionArray);
            optionArray.sort((a, b) => parseInt(a.value) - parseInt(b.value));
            optionArray.forEach(
                element => document.getElementById("modDisplayFontSize").appendChild(element)
            )
        }

    // Dropdown menu function:
    document.getElementById("modDisplayFontSize").addEventListener("change", () => {
        modDisplayFontSize(document.getElementById("modDisplayFontSize").value)
    });

    function modDisplayFontSize(fontSizeOption) {
        document.querySelectorAll("#fontDisplay dd").forEach(
            element => element.style.fontSize = fontSizeOption
        )
    };

    // Slide bar function: