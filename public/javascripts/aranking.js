let token = localStorage.getItem("token");
let url = "/users";

let params = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};

fetch(url, params)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    // Notes for sorting json data
    // Use of Array.prototype.sort()
    // function compare(a, b) {
    //     if (a is less than b by some ordering criterion) {
    //         return -1;
    //     }
    //     if (a is greater than b by the ordering criterion) {
    //         return 1;
    //     }
    //     // a must be equal to b
    //     return 0;
    // }
    json.sort((a, b) => b.score - a.score);

    let index = 1;
    let html1 = `

        <!-- Table Start -->
        <div class="container my-4 w-100 table-responsive">
            <table class="table table-striped text-dark">
                <thead>
                    <tr class="text-danger">
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">College</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody> `;

    let html2 = ``;

    let html3 = `
                </tbody>
            </table>
        </div>
        <!-- Table End --> 
    `;

    json.forEach((element) => {
      html2 += `      
            <tr>
                <th scope="row">${index}</th>
                <td>${element.username}</td>
                <td>${element.college}</td>
                <td>${element.score}</td>
            </tr>`;
      index++;
      console.log(element);
    });
    let html = html1 + html2 + html3;
    console.log(html);
    document.getElementById("userranking").innerHTML = html;
  })
  .catch((err) => console.log("Error occure", err));
