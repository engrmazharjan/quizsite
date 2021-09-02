let susername = document.getElementById("susername");
let spassword = document.getElementById("spassword");
let semail = document.getElementById("semail");
let smobile = document.getElementById("smobile");
let scollege = document.getElementById("scollege");

document.getElementById("ssignup").addEventListener("click", (e) => {
  // console.log("signup clicked")
  e.preventDefault();
  checkInputs();
  // http://localhost:3000
  let url = "/users/signup";

  let data = {
    username: susername.value,
    password: spassword.value,
    email: semail.value,
    mobile: smobile.value,
    college: scollege.value,
  };

  let params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, params)
    .then((res) => {
      return res.json();
    })

    .then((json) => {
      console.log(json);
      if (json.success == true) {
        location = "../login.html";
      }
    })

    .catch((err) => console.log("Error Occur" + err));

  // susername.value = "";
  // spassword.value = "";
  // semail.value = "";
  // smobile.value = "";
  // scollege.value = "";
});
function checkInputs() {
  // Get the values.value
  const usernameValue = susername.value.trim();
  const collegeValue = scollege.value.trim();
  const emailValue = semail.value.trim();
  const mobileValue = smobile.value.trim();
  const passwordValue = spassword.value.trim();

  // Check Name
  if (usernameValue === "") {
    // Show Error
    // Add Error Class
    setErrorFor(susername, "Name Cannot Be Blank");
  } else {
    // Add Success Class
    setSuccessFor(susername);
  }

  if (collegeValue === "") {
    // Show Error
    // Add Error Class
    setErrorFor(scollege, "College Name Cannot Be Blank");
  } else {
    // Add Success Class
    setSuccessFor(scollege);
  }

  if (emailValue === "") {
    setErrorFor(semail, "Email Cannot Be Blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(semail, "Not a valid email");
  } else {
    setSuccessFor(semail);
  }

  if (mobileValue === "") {
    setErrorFor(smobile, "Mobile Number Cannot Be Blank");
  } else {
    setSuccessFor(smobile);
  }

  if (passwordValue === "") {
    setErrorFor(spassword, "Password Cannot Be Blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(spassword, "Password Must Be At Least 8 Characters Long");
  } else {
    setSuccessFor(spassword);
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
