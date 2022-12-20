//Ajax
//asynch=> sync

//api => hit => fatch() => alluserInfo
//id retrive => singleuserinfo

//getUser
//find by id
//userinfo

function getUserPageWise(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (properRes) {
            return (properRes)
        })
}
//getUserPageWise(2)

function getSingleUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            //console.log(res)
            return res.json()
        }).then(function (properres) {
            //console.log(properres)
            return properres
        })
}
//getSingleUserInfo(7)


getUserPageWise(2)
    .then(function (res) {
        let id = res.data[1].id
        //console.log(id)
        return getSingleUserInfo(id)
    })
    .then(function (res) {
        let UserRes = res.data
        renderHtml(UserRes)
    })


function renderHtml(res) {
    document.write(`<img src=${res.avatar}>`)
    document.write(`<h3>${res.first_name}</h3>`)
    document.write(`<h3>${res.last_name}</h3>`)
    document.write(`<h3>${res.email}</h3>`)
}