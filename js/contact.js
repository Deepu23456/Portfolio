// Selecting the elements
const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const openMe = document.querySelector(".openMe");
const successMessage = document.querySelector(".success-message");

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


//Sending message functionality
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();


  // Select the input's value
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  //Your telegram bot token
  let telegramToken = "YOUR-TELEGRAM-BOT-TOKEN";

  //Your telegram chat id
  let chatId = "YOUR-TELEGRAM-CHAT-ID";

  let text = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

  let url =
    "https://api.telegram.org/bot" +
    telegramToken +
    "/sendMessage?chat_id=" +
    chatId +
    "&text=" +
    encodeURIComponent(text);

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      successMessage.style.display = "flex";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    } else {
      alert("Error sending message.");
    }
  };
});
