

function getUser(pageNo) {
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
        .then(function (a) {
            return a.json()
        })
        .then(function (b) {
            return (b)
        })
}


function getUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (a) {
            //console.log(res)
            return a.json()
        }).then(function (b) {
            //console.log(properres)
            return b
        })
}



getUser(1)
    .then(function (a) {
        let id = a.data[1].id
        //console.log(id)
        return getUserInfo(id)
    })
    .then(function (a) {
        let x = a.data
        Html(x)
    })


function Html(a) {
    document.write(`<img src=${a.avatar}>`)
    document.write(`<h2>${a.first_name}</h2>`)
    document.write(`<h2>${a.last_name}</h2>`)
    document.write(`<h2>${a.email}</h2>`)
}