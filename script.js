setInterval(() => {
    var currentTime = new Date();
    let hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    let hour_rotate_angle = 30 * hours + minutes / 2
    document.getElementById("second").style.transform = `rotate(${seconds * 6}deg)`
    document.getElementById("minute").style.transform = `rotate(${minutes * 6}deg)`
    document.getElementById("hour").style.transform = `rotate(${hour_rotate_angle}deg)`
    // done : 5:08* 14 August 2023pHar

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    var dayOfWeek = currentTime.getDay();
    // Get the day of the month (1 - 31)
    var dayOfMonth = currentTime.getDate();
    // Get the month (0 = January, 1 = February, ..., 11 = December)
    var month = currentTime.getMonth();
    // Define an array of month names
    var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    // Get the name of the month using the array
    var monthName = monthNames[month];
    // Define an array of day names
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Get the name of the day using the array
    var dayName = dayNames[dayOfWeek];
    document.getElementById("date").innerText = `${dayName.substring(0, 3)}, ${monthName.substring(0, 3)} ${dayOfMonth}`
    // substring(0, 3) => We are taking only three Char from the name of the month and day like Sunday > Sun
}, 1000);


// Showing border or outline in when you click on searchbar
const searchbar = document.getElementById('searchbar');
searchbar.addEventListener('click', function () {
    searchbar.classList.toggle('active'); // Toggle the 'active' class
});
document.addEventListener('click', function (event) {
    // Check if the clicked element is not the searchbar
    if (!searchbar.contains(event.target)) {
        searchbar.classList.remove('active'); // Remove the 'active' class
    }
});

//search function
document.addEventListener("DOMContentLoaded", () => {
    const enterBTN = document.getElementById("enterBtn");
    const searchInput = document.getElementById("searchQ");

    function performSearch() {
        var selectedOption = document.querySelector('input[name="search-engine"]:checked').value;
        var searchTerm = searchInput.value;
        var searchEngines = {
            engine1: 'https://duckduckgo.com/?q=',
            engine2: 'https://www.google.com/search?q=',
            engine3: 'https://bing.com/?q=',
            engine4: 'https://www.youtube.com/results?search_query='
        };

        if (searchTerm !== "") {
            var searchUrl = searchEngines[selectedOption] + encodeURIComponent(searchTerm);
            window.location.href = searchUrl;
        }
    }

    enterBTN.addEventListener("click", performSearch);

    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // -----The stay changed even if user reload the page---
    const storedTheme = localStorage.getItem(themeStorageKey);
    if (storedTheme) {
        applySelectedTheme(storedTheme);
        const selectedRadioButton = document.querySelector(`.colorPlate[value="${storedTheme}"]`);
        if (selectedRadioButton) {
            selectedRadioButton.checked = true;
        }
    }
});

// Function to apply the selected theme
// let themeButton = document.getElementById("themeButton")
// themeButton.onclick = () => {
//     document.getElementById("colorsContainer").classList.toggle("showColorPlate")
// }

const radioButtons = document.querySelectorAll('.colorPlate');
const themeStorageKey = 'selectedTheme';

const applySelectedTheme = (colorValue) => {
    if (colorValue != "blue") {
        document.documentElement.style.setProperty('--bg-color-blue', `var(--bg-color-${colorValue})`);
        document.documentElement.style.setProperty('--accentLightTint-blue', `var(--accentLightTint-${colorValue})`);
        document.documentElement.style.setProperty('--darkerColor-blue', `var(--darkerColor-${colorValue})`);
        document.documentElement.style.setProperty('--darkColor-blue', `var(--darkColor-${colorValue})`);
        document.documentElement.style.setProperty('--textColorDark-blue', `var(--textColorDark-${colorValue})`);
    } else {
        document.documentElement.style.setProperty('--bg-color-blue', '#BBD6FD');
        document.documentElement.style.setProperty('--accentLightTint-blue', '#E2EEFF');
        document.documentElement.style.setProperty('--darkerColor-blue', '#3569b2');
        document.documentElement.style.setProperty('--darkColor-blue', '#4382EC');
        document.documentElement.style.setProperty('--textColorDark-blue', '#1b3041');
    }
    if (colorValue === "dark") {
        // Please note: The dark theme is currently under development and may have issues.
        alert("Please note: The dark theme is currently under development and may have issues.")
    }
};

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        if (this.checked) {
            const colorValue = this.value;
            localStorage.setItem(themeStorageKey, colorValue);
            applySelectedTheme(colorValue);
        }
    });
});
// end of Function to apply the selected theme


// User entered Text stay changed even after reloadig the page
const userTextDiv = document.getElementById("userText");
const storedValue = localStorage.getItem("userText");
if (storedValue) {
    userTextDiv.textContent = storedValue;
}
userTextDiv.addEventListener("input", function () {
    localStorage.setItem("userText", userTextDiv.textContent);
});
// end of user entered text stufff

// when User click on "AI-Tools"
const element = document.getElementById("toolsCont");
const shortcuts = document.getElementById("shortcutsContainer");
document.getElementById("0NIHK").onclick = () => {

    if (element.style.display === "flex") {
        shortcuts.style.display = 'flex';
        element.style.opacity = "0";
        element.style.gap = "0";
        element.style.transform = "translateX(-100%)";
        setTimeout(() => {
            element.style.display = "none";
        }, 500);
    } else {
        shortcuts.style.display = 'none';
        element.style.display = "flex";
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
        }, 1);
        setTimeout(() => {
            element.style.gap = "12px";
        }, 300);
    }
}


// ------------Showing & Hiding Menu-bar ---------------
const menuButton = document.getElementById("menuButton");
const menuBar = document.getElementById("menuBar");
const menuCont = document.getElementById("menuCont");
const optCont = document.getElementById("optCont");

const closeMenuBar = () => {
    setTimeout(() => {
        menuBar.style.opacity = 0
        menuCont.style.transform = "translateX(100%)"
    }, 14);
    setTimeout(() => {
        optCont.style.opacity = 1
        optCont.style.transform = "translateX(100%)"
    }, 7);
    setTimeout(() => {
        menuBar.style.display = "none";
    }, 555);
}
menuButton.addEventListener("click", () => {
    if (menuBar.style.display === 'none' || menuBar.style.display === '') {
        menuBar.style.display = "block";
        setTimeout(() => {
            menuBar.style.opacity = 1
            menuCont.style.transform = "translateX(0px)"
        }, 7);
        setTimeout(() => {
            optCont.style.opacity = 1
            optCont.style.transform = "translateX(0px)"
        }, 11);
    } else {
        menuBar.style.display = "none";
    }
    //   ----------Hiding Menu Bar--------
    menuBar.addEventListener("click", (event) => {
        if (event.target === menuBar) {
            closeMenuBar()
        }
    });
});

// Hiding Menu Bar when user click on close button --------
document.getElementById("menuCloseButton").onclick = () => {
    closeMenuBar()
}

// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const shortcuts = document.getElementById("shortcutsContainer");
    const aiToolsCont = document.getElementById("aiToolsCont");
    const shortcutsCheckbox = document.getElementById("shortcutsCheckbox");
    const aiToolsCheckbox = document.getElementById("aiToolsCheckbox");

    // Function to save checkbox state to localStorage
    function saveCheckboxState(key, checkbox) {
        localStorage.setItem(key, checkbox.checked ? "checked" : "unchecked");
    }

    // Function to load and apply checkbox state from localStorage
    function loadCheckboxState(key, checkbox) {
        const savedState = localStorage.getItem(key);
        if (savedState === "checked") {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    }

    // Function to save display status to localStorage
    function saveDisplayStatus(key, displayStatus) {
        localStorage.setItem(key, displayStatus);
    }

    // Function to load and apply display status from localStorage
    function loadDisplayStatus(key, element) {
        const savedStatus = localStorage.getItem(key);
        if (savedStatus === "flex") {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }

    // Load and apply the saved checkbox states and display statuses
    loadCheckboxState("shortcutsCheckboxState", shortcutsCheckbox);
    loadCheckboxState("aiToolsCheckboxState", aiToolsCheckbox);
    loadDisplayStatus("shortcutsDisplayStatus", shortcuts);
    loadDisplayStatus("aiToolsDisplayStatus", aiToolsCont);

    // Add change event listeners for the checkboxes
    shortcutsCheckbox.addEventListener("change", function () {
        saveCheckboxState("shortcutsCheckboxState", shortcutsCheckbox);
        if (shortcutsCheckbox.checked) {
            shortcuts.style.display = "flex";
            saveDisplayStatus("shortcutsDisplayStatus", "flex");
        } else {
            shortcuts.style.display = "none";
            saveDisplayStatus("shortcutsDisplayStatus", "none");
        }
    });

    aiToolsCheckbox.addEventListener("change", function () {
        saveCheckboxState("aiToolsCheckboxState", aiToolsCheckbox);
        if (aiToolsCheckbox.checked) {
            aiToolsCont.style.display = "flex";
            saveDisplayStatus("aiToolsDisplayStatus", "flex");
        } else {
            aiToolsCont.style.display = "none";
            saveDisplayStatus("aiToolsDisplayStatus", "none");
        }
    });
});

