document.getElementById("submit-btn").addEventListener("click", function () {
  const email = document.getElementById("user-email");
  const password = document.getElementById("user-password");
  const userEmail = email.value;
  const userPassword = password.value;
  if (userEmail == "user@gmail.com" && userPassword == "user123") {
    window.location.href = "banking.html";
    email.value = "";
    password.value = "";
  } else {
    alert("Invalid password or email");
    email.value = "";
    password.value = "";
  }
});
