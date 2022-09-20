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

// Login User
const LoginUser = (user) => {
    axios.post('http://127.0.0.1:5000/login', user)
        .then(response => {
            const loginuser_ = response.data;
            console.log(loginuser_);
            if (loginuser_["success"] == true) {
                window.location.href = "./login_confirmation.html"
            }
            else if (loginuser_["message"] == "User does not exist.") {
                alert("User does not exist. Please Register")
            }
            else {
                alert("Incorrect password.")
            }

        })
        .catch(function (error) {
            if (error.response) {
                alert(error.response.data["message"]);
            }
        });
};
function Loginform() {
    const form = document.querySelector('form');

    const formEvent = form.addEventListener('submit', event => {
        event.preventDefault();

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        const user = { username, password };
        LoginUser(user);

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











