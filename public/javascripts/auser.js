let token = localStorage.getItem("token");
let url = "/users";

let params = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
// console.log("now fetch call time");

fetch(url, params)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    let inedex = 1;
    let html1 = `
        <!-- Table Start-->
        <div class="container my-4 table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr class="text-danger">
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">College</th>
                        <th scope="col">Score</th>
                        <th scope="col">Mobile No.</th>
                    </tr>
                </thead>
                <tbody>
                    `;
    let html2 = ``; // dynamic content
    let html3 = `  
                </tbody>
            </table>
        </div>
        <!-- Table End -->
    `;
    json.forEach((element) => {
      console.log(element.username);
      html2 += `
        <tr>
            <th scope="row">${inedex}</th>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.college}</td>
            <td>${element.score}</td>
            <td>${element.mobile}</td>
        </tr>`;
      inedex++;
    });

    let html = html1 + html2 + html3;
    document.getElementById("userdata").innerHTML = html;
  })
  .catch((err) => console.log("Error occure"));
