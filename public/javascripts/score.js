let token = localStorage.getItem("token");

let userscore = sessionStorage.getItem("myscore"); // fetching userscore from session storage
console.log(userscore);
let tq = sessionStorage.getItem("totalqustion");

let htmls = `
    <em><h1 id="demo" class="text-center my-3 display-2 border border-dark rounded zoom animate">Result<h1></em>
    <!--Table Start-->
    <div class="container">
        <div class="mx-2 my-2">
            <table class="table">
                <tbody>
                    <tr class="table-warning">
                        <td scope="row">Total Questions</td>
                        <td>${tq}</td>
                    </tr>

                    <tr class="table-primary">
                       <td scope="row">Right Answer</td>
                       <td>${userscore}</td>
                    </tr>

                    <tr class="table-success zoom">
                       <td scope="row">Score</td>
                       <td>${userscore}</td>
                    </tr>
                </tbody>
            </table>
            <!--Table End-->
        </div>
    </div>
    <div class="container">
        <div class="row">
            <img src="./images/certificate.jpg" class="w-25 zoom" alt="certificate">
            <h1 class="my-5 scale" id="textsize">Congratulations</h1>
        </div>
    </div>
`;

console.log(htmls);

document.getElementById("myscores").innerHTML = htmls;
