let token = localStorage.getItem("token");

let qus = document.getElementById("qus");
let opsa = document.getElementById("opsa");
let opsb = document.getElementById("opsb");
let opsc = document.getElementById("opsc");
let opsd = document.getElementById("opsd");
let curans = document.getElementById("curans");

let quizname = sessionStorage.getItem("quizname");
console.log(quizname);

document.getElementById("addqus").addEventListener("click", (e) => {
  let urls = "http://localhost:3000/addquiz";
  e.preventDefault();
  let datas = {
    quizname: quizname,

    qusans: {
      qustion: qus.value,
      answer: curans.value,

      options: [
        {
          A: opsa.value,
        },
        {
          B: opsb.value,
        },
        {
          C: opsc.value,
        },
        {
          D: opsd.value,
        },
      ],
    },
  };

  let paramss = {
    method: "POST",
    body: JSON.stringify(datas),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  fetch(urls, paramss)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })

    .catch((err) => console.log("Error occure", err));

  qus.value = "";
  curans.value = "";
  opsa.value = "";
  opsb.value = "";
  opsc.value = "";
  opsd.value = "";
});
