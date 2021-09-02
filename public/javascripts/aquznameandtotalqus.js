let quizname = document.getElementById("quizname");
let totalqustion = document.getElementById("totalqustion");

document.getElementById("nextbtn").addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.setItem("quizname", quizname.value);
  sessionStorage.setItem("totalqustion", totalqustion.value);

  console.log("Set Successfully");
  location = "../aaddquiz.html";
});
