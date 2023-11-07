document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // the actual URL of your API
    const apiUrl = "http://localhost:8088/login";
    //localhost:8088/login

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Successfully logged in, you can redirect to another page or perform other actions
          alert("Login successful!");
        } else {
          errorMessage.textContent = "Invalid credentials. Please try again.";
          errorMessage.classList.remove("hidden");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        errorMessage.textContent = "An error occurred. Please try again later.";
        errorMessage.classList.remove("hidden");
      });
  });
});
