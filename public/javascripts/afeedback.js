let token = localStorage.getItem("token");
let url = "http://localhost:3000/contactus";

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
    let inedex = 1;
    let html1 = `<!-- table start -->

        <div class="container my-4 table-responsive">

        <table class="table table-striped">
            <thead>
                <tr class="text-danger">
                    <th scope="col">Sr.No</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Email</th>
                    <th scope="col">Time</th>
                    <th scope="col">By</th>
                    <th scope="col">Country</th>
                </tr>
            </thead>
            <tbody>
     `;
    let html2 = ``; // dynamic content
    let html3 = `  </tbody>
        </table>
    </div>
    <!-- table end -->`;

    json.forEach((element) => {
      console.log(element);
      html2 += `
            <tr>
                <th scope="row">${inedex}</th>
                <td>${element.subject}</td>
                <td>${element.email}</td>
                <td>${element.createdAt}</td>
                <td>${element.name}</td>
                <td>${element.country}</td>
            </tr>`;
      inedex++;
    });
    let html = html1 + html2 + html3;
    document.getElementById("userfeedback").innerHTML = html;
  })

  .catch((err) => console.log("Error occure"));
