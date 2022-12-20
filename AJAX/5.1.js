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

// we need to retrive the elements hence we use foreach 
userInfo.data.forEach(function(el){
	// console.log(el)
	html(el)
})


// function createHTML(singleUserInfo) {
	//     document.write(`<h3> userId: ${singleUserInfo.id}</h3>`)
	//     document.write(`<h3> Email: ${singleUserInfo.email}</h3>`) //<h3>mayuri@gmail.com</h3>
	//     document.write(`<h3>firstName: ${singleUserInfo.first_name}</h3>`)
	//     document.write(`<h3>LastName: ${singleUserInfo.last_name}</h3>`)
	//     document.write(`<img src=${singleUserInfo.avatar}>`) 
// }


function html (x){
	document.write(`<h1> ${x.id}</h1>`)
	document.write(`<h5> ${x.email}</h5>`)
	document.write(`<h5> ${x.first_name}</h5>`)
	document.write(`<h5> ${x.last_name}</h5>`)
	document.write(`<img src = ${x.avatar}>`)
}






















