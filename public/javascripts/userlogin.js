let lusername = document.getElementById("lusername");
let lpassword = document.getElementById("lpassword");

document.getElementById("llogin").addEventListener("click", (e) => {
  // console.log("login clicked")

  let url = "http://localhost:3000/users/login";

  let data = {
    username: lusername.value,
    password: lpassword.value,
  };

  let params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // console.log("now fetch call time");
  fetch(url, params)
    .then((res) => {
      return res.json();
    })

    .then((json) => {
      console.log(json);
      if (json.success === true) {
        location = "../dash.html";
        localStorage.setItem("token", json.token);
      } else {
        alert("Unauthorized User");
      }
    })
    .catch((err) =>
      alert("Unauthorized User... Username or Password is incorrect  ")
    );
  lusername.value = "";
  lpassword.value = "";
});
