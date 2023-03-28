
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


function getUserinfo (id){
    return fetch (`https://reqres.in/api/users/${id}`) // returns promise , so we have to consume , how to consume-by .then
    .then (function(res){  // consuming by .then
       if (res.ok){       
        return res.json()   // return non readbale format hence changing to jason format
        .then (function(res){   // return promise hence we have to consume by .then
            return res.data   // it returns the data which is elemt of api

        })
       } 
       else {              
        return new Error ('error found')  // error is keyword to print error
       }
    })

}


async function asyncGetUser (a,b,c,d){
    try{ 
        let x = await Promise.all([
        getUserinfo(a),
        getUserinfo(b),
        getUserinfo(c),
        getUserinfo(d)
    ])
    console.log(x)

    }
   catch(x) {
    console.log(x)

   }

}
asyncGetUser(1,2,3,4)