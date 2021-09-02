let name = document.getElementById("name");
let email = document.getElementById("email");
let country = document.getElementById("country");
let subject = document.getElementById("subject");

document.getElementById("consub").addEventListener("click", (e) => {
  let urls = "/contactus";

  let datas = {
    name: name.value,
    email: email.value,
    country: country.value,
    subject: subject.value,
  };

  let paramss = {
    method: "POST",
    body: JSON.stringify(datas),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(urls, paramss)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log("Error Occur:", err));

  name.value = "";
  email.value = "";
  country.value = "";
  subject.value = "";
});
