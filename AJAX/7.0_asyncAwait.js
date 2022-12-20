//Ajax

//Api hit => all user
//retrive id of any one user
//pass that id to another API
//retrive information of any perticular user(single user)

//API => async or sync

function getAllUser(pageNo) {
    return fetch(`https://reqres.in/api/users?page=${pageNo}`)
        .then(function (res) {
            return res.json()
        }).then(function (userInfo) {
            return userInfo.data[3].id
        })
}
// getAllUser()

function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (user) {
            return user.data
        })
}
//getSingleUser(8)

function renderHtml(res) {
    document.write(`<img src=${res.avatar}>`)
    document.write(`<h3>${res.first_name}</h3>`)
    document.write(`<h3>${res.last_name}</h3>`)
    document.write(`<h3>${res.email}</h3>`)
    document.write(`<h3>${res.id}</h3>`)
}

// getAllUser(1)
// .then(function(id){
//     return getSingleUser(id)
// })
// .then(function(singleUserInfo){
//     //console.log(singleUserInfo)
//     renderHtml(singleUserInfo)
// })

//Async Await

async function renderSingleUserInfo() {
    let getId = await getAllUser(2)  
    let oneUserInfo = await getSingleUser(getId)
    //console.log(oneUserInfo)
    renderHtml(oneUserInfo)

}
renderSingleUserInfo()
