document.getElementById("userlogout").addEventListener("click", (e) => {
  localStorage.clear();
  sessionStorage.clear();
  location = "../index.html";
});
