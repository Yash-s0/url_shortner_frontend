var myBooks

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

function seeHistory() {
    let config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + getCookie("token")
        }
    }
    axios.post('http://127.0.0.1:5000/entries', {}, config)
        .then(response => {
            globalThis.myBooks = response.data
            if (myBooks["success"] == false) {
                alert("Please login again.")
                window.location.href = "./login.html"
            }
            else {
                console.log("Searching for previously searched urls in our database.")
                window.location.href = "./see_history.html"
                console.log(myBooks)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}