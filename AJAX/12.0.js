
// Promise.race
// Promise.any
// Promise.allSettled
// Promise.all


// function getUser(id) {
//     return fetch(`https://reqres.in/api/users?page=${id}`)
//         .then(function (res) {
//             if (res.ok) {
//                 return res.json().then(function (res) {
//                     return res.data
//                 })
//             }
//             else {
//                 return new Error('user not found')
//             }
//         })

// }
// async function getUsers(id, id2, id3) {
//     try {
//         let data = await Promise.all([
//             getUser(id),
//             getUser(id2),
//             getUser(id3)
//         ])
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err)
//     }

// }
// getUsers(1, 2, 344)


// Promise.race
// share market api ----> 
// 2 second-
// 5 second 


// program promise.race
function timeOut (sec){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject(new Error('late ho gye aap'))
        },sec*1000)

    })
}

function getUser(id) {
    // return fetch (`https://reqres.in/api/users?page=${id}`)
    return fetch (`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json() // it returns non readable hence we change it to json format 
    })
    .then(function(res){  // res.json returns promise , hence we have to consume promise 
        return res.data // we got the data , data is api element
    })     
}
async function getUserInTime(id,sec){
    let a = await Promise.race([
        getUser(id),
        timeOut(sec)
    ])
    console.log(a)
}
getUserInTime(1,0.000000000000000000000000000000000000001)