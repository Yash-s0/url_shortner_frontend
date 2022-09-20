//  Register a new user 

//  Link to server
const createUser = (user) => {
    axios.post('http://127.0.0.1:5000/new-user', user)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            window.location.href = "./registration_confirmation.html"
        })
        .catch(function (error) {
            if (error.response) {
                alert(error.response.data["message"]);
            }
        });

    // .catch(error =>
    //     alert("Error " + error.response.status + " User Already Exist.")
    // );
};

// Taking arguments from user 
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


// Create a sticky header
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}













