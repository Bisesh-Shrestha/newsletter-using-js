function printas() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  const para = document.getElementById("paragraph");
  para.innerHTML =
    "A confirmation email has been sent to <b>" +
    email +
    "</b>. Please open it and click the button inside to confirm your subscription.";
}

const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
function submitHandle(event) {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  event.preventDefault();
  if (emailValue === "") {
    errorMessage.textContent = "Email cannot be empty";
    email.classList.add("error-styling");
  } else if (!emailRegex.test(emailValue)) {
    errorMessage.textContent = "Valid email required";
    email.classList.add("error-styling");
  } else {
    window.location.href =
      "confirmation.html?email=" + encodeURIComponent(emailValue);
  }
}

email.addEventListener("input", () => {
  if (email.classList.contains("error-styling")) {
    email.classList.remove("error-styling");
    errorMessage.textContent = "";
  }
});
