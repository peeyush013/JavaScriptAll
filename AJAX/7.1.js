

function usersInformation(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`) // we return it to use in await
        .then(function (x) {
            return x.json() // json coz x will provide non readable
        }).then(function (usersDetails) {
            return usersDetails.data[5].id
        })
}
// getAllUsersInformation()

function getRequiredUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`) // return to use in await
        .then(function (x) {
            return x.json()
        })
        .then(function (user) {
            return user.data
        })
}
//getRequiredUser()

function renderHtml(res) {
    document.write(`<img src=${res.avatar}>`)
    document.write(`<h3>${res.id}</h3>`)
    document.write(`<h3>${res.first_name}</h3>`)
    document.write(`<h3>${res.last_name}</h3>`)
    document.write(`<h3>${res.email}</h3>`)
}

// usersInformation(2)
// .then(function(email){
//     return getRequiredUser(email)
// })
// .then(function(getRequiredUser){
//     //console.log(getRequiredUser)
//     renderHtml(getRequiredUser)
// })

//Async Await

async function renderUserInfo() {
    let getEmail = await usersInformation(1)
    let singleUserInfo = await getRequiredUser(getEmail)
    //console.log(singleUserInfo)
    renderHtml(singleUserInfo)

}
renderUserInfo()





// doubts
// why ans is not coming if we are removing id in line 8 and replacing with first_name etc
// why in line 44 there is fixed 2 , reault is not showing other than this
