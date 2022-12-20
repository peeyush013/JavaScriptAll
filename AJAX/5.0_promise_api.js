
let userInfo = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

//step 1
// userInfo.data.forEach(function (user) {
//     // console.log(user)
//     createHTML(user)
// })

//step 2 function

function createHTML(singleUserInfo) {
    document.write(`<img src=${singleUserInfo.avatar}>`) 
    document.write(`<h3> userId: ${singleUserInfo.id}</h3>`)
    document.write(`<h3> Email: ${singleUserInfo.email}</h3>`) //<h3>mayuri@gmail.com</h3>
    document.write(`<h3>firstName: ${singleUserInfo.first_name}</h3>`)
    document.write(`<h3>LastName: ${singleUserInfo.last_name}</h3>`)
}

//==========problem overcome

//fetch()

function getUser() {
    fetch('https://reqres.in/api/users?page=2') //promise return
        .then(function (result) {
            //console.log(result) //not in readable form
            return result.json()// its also a promise hence we need to apply then
        })
        .then(function(res){
            //console.log(res.data)
            res.data.forEach(element => {
                createHTML(element)
            });
        })
}
getUser()