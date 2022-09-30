function redirect_tourl_page() {
    window.location.href = "./convert.html"
}

//convert any url
function converturl(url) {
    let config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + getCookie("token"),
        }
    }
    axios.post('http://127.0.0.1:5000/shorten-url?url=' + url, {}, config)
        .then(response => {
            short_url = response
            console.log(short_url.data)
            if (short_url.data["message"] == "User already searched for this URL.") {
                document.getElementById("main-form").innerHTML = "<br><br><h3>" + (short_url.data["message"]) + "</h3>"
                element = document.querySelector('h3');
                element.style.color = 'orange';
            }
            else {
                document.getElementById("changeh2").innerHTML = "<h3>" + (short_url.data["message"]) + "</h3>"
                element = document.getElementById('changeh2');
                element.style.color = 'orange';
                document.getElementById("postdata").innerHTML = "<h3>" + (short_url.data["short_link"]) + "</h3>"
                element = document.getElementById('postdata');
                element.style.color = 'orange';

            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


function runurl() {
    const form = document.querySelector('form');
    const formEvent = form.addEventListener('submit', event => {
        event.preventDefault();
        const url = document.querySelector('#url').value;
        converturl(url);
    });
}