//  Register a new user 
//  Link to server
const createUser = (user) => {
    axios.post('http://127.0.0.1:5000/new-user', user)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            window.location.href = "./registration_confirmation.html"
            alert(response.data["message"])
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

// Check Loggedin user
const UserInfo = () => {
    let config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + getCookie("token")
        }
    }

    axios.post('http://127.0.0.1:5000/user-info', {}, config)
        .then(response => {
            logged_in = (response.data["username"])
            alert("Logged in as " + logged_in)
            document.getElementById("show-user").innerHTML += "<h1> Welcome, " + logged_in + "</h1>";
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
};

// Login User
const LoginUser = (user) => {
    axios.post('http://127.0.0.1:5000/login', user)
        .then(response => {
            const loginuser_ = response.data;
            console.log(loginuser_);
            if (loginuser_["success"] == true) {
                setCookie("token", loginuser_["bearer_token"], 1)
                window.location.href = "./home.html"
                console.log(getCookie("token"))
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

// make the header sticky 
// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myHeader");

// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

// Set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Erase Cookie
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


// if cookie exists
// getCookie("xyz") == None:
//     redirect to login








