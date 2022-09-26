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
            console.log(response)
            window.location.href = "./home.html"
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
                window.location.href = "./login_confirmation.html"
                console.log(getCookie("token"))
            }

            else if (loginuser_["message"] == "User does not exist.") {
                alert("User does not exist. Please Register")
                window.location.href = "./login.html"
            }
            else {
                alert("Incorrect password.")
                window.location.href = "./login.html"
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

// Redirect to login page if user disagree to login
function redirect_login() {
    alert("Enter Details Again")
    window.location.href = "./login.html"
}










