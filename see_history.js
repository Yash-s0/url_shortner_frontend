// Creating table to view previously searched urls
window.onload = (myBooks) => {
    let config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + getCookie("token")
        }
    }
    axios.post('http://127.0.0.1:5000/entries', {}, config)
        .then(response => {
            myBooks = response.data
            console.log(myBooks)
            console.log('page is fully loaded');

            if (myBooks.length == 0) {
                document.getElementById("showData").innerHTML = "<h1> No Record Found!! </h1><br><br>"
            }
            else {
                let col = [];
                for (let i = 0; i < myBooks.length; i++) {
                    for (let key in myBooks[i]) {
                        if (col.indexOf(key) === -1) {
                            col.push(key);
                        }
                    }
                }
                console.log(col)
                console.log(col)
                const table = document.createElement("table");
                let tr = table.insertRow(-1);
                for (let i = 0; i < col.length; i++) {
                    let th = document.createElement("th");
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }
                for (let i = 0; i < myBooks.length; i++) {
                    tr = table.insertRow(-1);

                    for (let j = 0; j < col.length; j++) {
                        let tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myBooks[i][col[j]];
                    }
                }

                const showdata_ = document.getElementById('showData');

                showdata_.innerHTML = "";
                showdata_.appendChild(table);
            }
        })

};