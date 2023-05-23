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

// Font Demo: List/Grid Toggle
document.getElementById("listGridToggle").addEventListener("click", () => {
    // Unit test:
    // alert("Grid View");
    document.getElementById("fontDemo").classList.toggle("listView");
    document.getElementById("fontDemo").classList.toggle("gridView");
    document.getElementById("listGridToggle").textContent = 
        (document.getElementById("listGridToggle").textContent === "格狀檢視") ?
        "列表檢視" : "格狀檢視"
});

// Font Demo: Custom Text Input
document.getElementById("customTextInput").addEventListener("input", () => {
    document.querySelectorAll("#fontDemo dd").forEach(
        element => element.textContent =
        document.getElementById("customTextInput").value.toString());
});
document.getElementById("customTextInput").addEventListener("focusout", () => {
    if (document.getElementById("customTextInput").value === "")
    document.querySelectorAll("#fontDemo dd").forEach(
        element => element.textContent = "法律之前人人平等，並有權享受法律的平等保護，不受任何歧視。人人有權享受平等保護，以免受違反本宣言的任何歧視行為以及煽動這種歧視的任何行為之害。")
});

// Font Demo: Font Size Controllers

    // Set initial display size auto-select:
    let isSelected = false;

        /* Dropdown Menu: if a matching option is present, it is selected. */
        document.querySelectorAll("#fontSizeDropdownMenu option").forEach(
            element => {
                if (element.textContent === window.getComputedStyle(document.body).getPropertyValue("font-size")) {
                    element.selected = true;
                    isSelected = true;
                }
            }
        )
        /* Dropdown Menu: if no matching option is present, a new option is:
        created and added to the dropdown menu,
        assigned text content with computed font size of <body>,
        selected and
        sorted. */
        if (isSelected === false) {
            let dynamicOption = document.getElementById("fontSizeDropdownMenu").appendChild(document.createElement("option"));
            dynamicOption.textContent = window.getComputedStyle(document.body).getPropertyValue("font-size");
            dynamicOption.selected = true;
            let optionArray = Array.from(
                document.getElementById("fontSizeDropdownMenu").options
            );
            // Unit test:
            // alert(optionArray);
            optionArray.sort((a, b) => parseInt(a.value) - parseInt(b.value));
            optionArray.forEach(
                element => document.getElementById("fontSizeDropdownMenu").appendChild(element)
            )
        }
        /* Slider: ㄋet value to computed font size of <body> */
        document.getElementById("fontSizeSlider").value = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

    
    // Dropdown Menu:
    document.getElementById("fontSizeDropdownMenu").addEventListener("change", () => {
        document.querySelectorAll("#fontDemo dd").forEach(
            element => element.style.fontSize = document.getElementById("fontSizeDropdownMenu").value
        )

        /* Linking Slider */
        document.getElementById("fontSizeSlider").value = parseInt(document.getElementById("fontSizeDropdownMenu").value);
        dynamicOption.remove();
        isOriginalMenu = true;
    });


    // Slider:
    // document.getElementById("fontSizeSlider").addEventListener("input", () => {
        // document.querySelectorAll("#fontDemo dd").forEach(
        //     element => element.style.fontSize = document.getElementById("fontSizeSlider").value.toString() + "px"
        // )
        
        // let dynamicOption;

        // (isOptionAvailable) ?
        // {create new option element; appendChild to menu; sort the menu; } : {}
        
    // };    
    
    let isOriginalMenu = true;
    let isOptionAvailable;
    let dynamicOption;

    document.getElementById("fontSizeSlider").addEventListener("input", () => {
        document.querySelectorAll("#fontDemo dd").forEach(
            element => element.style.fontSize = document.getElementById("fontSizeSlider").value.toString() + "px"
        )
        
        /* if (isOriginalMenu === true) {
            (isOptionAvailable) ? 
            {select} : 
            {create new option element; add it to menu; assign it to dynamicOption; sort the menu; isOriginalMenu = false}} */
        if (isOriginalMenu === true) {
            isOptionAvailable = false; // Setting default value.
            document.querySelectorAll("#fontSizeDropdownMenu option").forEach(
                element => {
                    if (element.textContent === document.getElementById("fontSizeSlider").value.toString() + "px") {
                        element.selected = true;
                        isOptionAvailable = true;
                    }
                }
            );
            if (isOptionAvailable === false) {
                dynamicOption = document.getElementById("fontSizeDropdownMenu").appendChild(document.createElement("option"));
                dynamicOption.textContent = window.getComputedStyle(document.querySelector("#fontDemo dd")).getPropertyValue("font-size");
                dynamicOption.selected = true;
                let optionArray = Array.from(
                    document.getElementById("fontSizeDropdownMenu").options
                );
                optionArray.sort((a, b) => parseInt(a.value) - parseInt(b.value));
                optionArray.forEach(
                    element => document.getElementById("fontSizeDropdownMenu").appendChild(element)
                )
                isOriginalMenu = false;
            };
        }

        /* if (isOriginalMenu === false) {
            (isOptionAvailable) ? {select} : {modify dynamicOption; sort the menu}} */
        if (isOriginalMenu === false) {
            isOptionAvailable = false; // Setting default value.
            document.querySelectorAll("#fontSizeDropdownMenu option").forEach(
                element => {
                    if (element.textContent === document.getElementById("fontSizeSlider").value.toString() + "px") {
                        element.selected = true;
                        isOptionAvailable = true;
                    }
                }
            );

            if (isOptionAvailable === false) {
                dynamicOption.textContent = window.getComputedStyle(document.querySelector("#fontDemo dd")).getPropertyValue("font-size");
                dynamicOption.selected = true;
                let optionArray = Array.from(
                    document.getElementById("fontSizeDropdownMenu").options
                );
                optionArray.sort((a, b) => parseInt(a.value) - parseInt(b.value));
                optionArray.forEach(
                    element => document.getElementById("fontSizeDropdownMenu").appendChild(element)
                )
                isOptionAvailable = false;
            };
        }
    });