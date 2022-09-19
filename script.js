const createUser = (user) => {
    axios.post('http://127.0.0.1:5000/new-user', user)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            window.location.href = "./registration_confirmation.html"
        })
        .catch(error =>
            alert("Error " + error.response.status + " User Already Exist."),
        );



};

function runform() {
    const form = document.querySelector('form');

    const formEvent = form.addEventListener('submit', event => {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        const user = { username, password };
        createUser(user);

    });
}





// async function formdata() {
//     username = document.getElementById("username").value;
//     password = document.getElementById("password").value;

//     document.writeln("<h1>Confirmation Page</h1><br>");
//     document.writeln("Thank you for completing this form.<br><br>");
//     document.writeln("The name you entered is " + username + "<br>");
//     document.writeln("The password name you entered is " + password);

//     let newuser = { username: username, password: password };


// await fetch('http://127.0.0.1:5000/new-user', {
//     method: 'POST',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',

//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify(newuser)

// }).catch(function (erro) {
//     console.log(erro);
// });

// if (response.status >= 400) {
//     console.log("Error 400 Missing Parameters.")
// }
// else if (response.status >= 409) {
//     console.log("Error 409 User Already Exist.")
// }
// }

// }








