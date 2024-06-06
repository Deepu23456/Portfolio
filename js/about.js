// Selecting the elements
const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const openMe = document.querySelector(".openMe");


//Menu open for mobile devices
openNav.addEventListener("click", () => {
  openMe.classList.add("active");
});

closeNav.addEventListener("click", () => {
  openMe.classList.remove("active");
});


//Dark-Light mode functionality
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (document.body.classList.contains(currentTheme)) {
      document.body.classList.remove("light-mode");
      toggleButton.classList.remove("ri-moon-fill");
      toggleButton.classList.add("ri-sun-fill");
    }
  } else {
    toggleButton.classList.add("ri-moon-fill");
    toggleButton.classList.remove("ri-sun-fill");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      toggleButton.classList.remove("ri-moon-fill");
      toggleButton.classList.add("ri-sun-fill");
    } else {
      toggleButton.classList.add("ri-moon-fill");
      toggleButton.classList.remove("ri-sun-fill");
    }

    let theme = "";
    if (document.body.classList.contains("dark")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
  });
});
