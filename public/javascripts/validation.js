// References
const form = document.getElementById("form");
const username = document.getElementById("susername");
const college = document.getElementById("scollege");
const email = document.getElementById("semail");
const mobile = document.getElementById("smobile");
const password = document.getElementById("spassword");

// Event Listener
form.addEventListener("click", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Get the values.value
  const usernameValue = username.value.trim();
  const collegeValue = college.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const passwordValue = password.value.trim();

  // Check Name
  if (usernameValue === "") {
    // Show Error
    // Add Error Class
    setErrorFor(username, "Name Cannot Be Blank");
  } else {
    // Add Success Class
    setSuccessFor(username);
  }

  if (collegeValue === "") {
    // Show Error
    // Add Error Class
    setErrorFor(college, "College Name Cannot Be Blank");
  } else {
    // Add Success Class
    setSuccessFor(college);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email Cannot Be Blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (mobileValue === "") {
    setErrorFor(password, "Password Cannot Be Blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password2 Cannot Be Blank");
  } else {
    setSuccessFor(password2);
  }
}

// function For Showing Errors

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  // Add Error Class

  formControl.className = "RegisterForm error";
  // Add Error Message Inside Small

  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "RegisterForm success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
