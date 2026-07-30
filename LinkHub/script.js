const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "🌞 Dark Theme";
    } else {
        themeBtn.textContent = "🌙 Light Theme";
    }
});