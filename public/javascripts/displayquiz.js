let token = localStorage.getItem("token");

let url = "/addquiz";

let params = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};

fetch(url, params)
  .then((res) => res.json())
  .then((json) => {
    sessionStorage.setItem("jsonquizdata", JSON.stringify(json)); // Storing All Questions Into Session Storage

    let index = 1;
    let html = "";

    html1 = `<hr>
        <div class="container my-5 table-responsive">
            <table class="table table-hover table-primary" id="outline">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Topic</th>
                        <th scope="col">Total Questions</th>
                        <th scope="col">Total Marks</th>
                        <th scope="col">Let's GO</th>
                    </tr>
                </thead>
                <tbody>
    `;
    html2 = ``;
    html3 = `</tbody>
            </table>
        </div>`;

    json.forEach((element) => {
      html2 += `
        <tr>
            <th scope="row">${index}</th>
            <th>${element.quizname}</th>
            <th>${element.qusans.length}</th>
            <th>${element.qusans.length}</th>
            <th class="zoom"><button type="button" id="startbtn${index}" class="btn btn-dark" value="${element.quizname}">START</button></th>
        </tr>`;
      index++;
    });

    html = html1 + html2 + html3;
    console.log(html);
    document.getElementById("quiztable").innerHTML = html;

    for (let i = 1; i < index; i++) {
      document.getElementById(`startbtn${i}`).addEventListener("click", (e) => {
        console.log(e.target.value);
        sessionStorage.setItem("targetquiz", e.target.value);
        location = "../quiz.html";
      });
    }
  });
