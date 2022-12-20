//Ajax
//callBack hell
//promises

//promise 
//1. to handle sync execution of async code
//2. to handle parallel execution of async code

// let result = new Promise(function (resolve, reject) {
//     let firstName = "Mayurik"
//     if (firstName.length == 6) {
//         resolve('length is correct')
//     }
//     else {
//         reject('length is incorrect')
//     }
// })

// result.then(function (res) {
//     console.log(res)
// }, function (res) {
//     console.log(res)
// })

// let result = new Promise(function (resolve, reject) {
//     let firstName = "Mayurik"
//     if (firstName.length == 6) {
//         resolve('length is correct')
//     }
//     else {
//         reject('length is incorrect')
//     }
// })

// result.then(function (res) {
//     console.log(res)
// })
// .catch(function(res){
//     console.log(res)
// })


// let result = new Promise(function (resolve, reject) {
//     let firstName = "Mayuri"
//     if (firstName.length == 6) {
//         resolve('length is correct')
//     }
//     else {
//         reject('length is incorrect')
//     }
// })

// result.then(function (res) {
//     console.log(res)
// })
// .catch(function(rej){
//     console.log(rej)
// })
// .finally(function(){
//     console.log('I will execute at any point')
// })


//User create => find user by id => print user
// function createFindPrint() {
//     setTimeout(function () {
//         console.log('Create user') //10
//     }, 3000)

//     setTimeout(function () {
//         console.log('find user by id 2')
//     }, 2000)

//     setTimeout(function () {
//         console.log('Print user info')
//     }, 1000)
// }
// createFindPrint()

//async => execution => sync

//call back hell

// function createFindPrint(){
//     setTimeout(function(){
//         console.log('Create 10 users')

//         setTimeout(function(){
//             console.log('Find user by id 2')

//             setTimeout(function(){
//                 console.log('Print user info')

//             },1000)
//         },2000)
//     },3000)
// }
// createFindPrint()

// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Create 10 user')
//         }, 3000)
//     })
// }

// function getUserById() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('get User by id 2')
//         }, 2000)
//     })

// }

// function printUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Print user info')
//         }, 1000)
//     })
// }

// createUser()
//     .then(function (val) {
//         console.log(val)

//         return getUserById()
//     })
//     .then(function (val) {
//         console.log(val)

//         return printUser()
//     })
//     .then(function (val) {
//         console.log(val)
//     })


function createUser() {
    return new Promise(function (resolve, reject) { // return will use in calling later
        let sucessResponse = false
        if (sucessResponse) {
            setTimeout(function () { // choice to use settimeout
                resolve('Create 10 user')
            }, 3000)
        }
        else {
            setTimeout(function () {
                reject('Create 10 user fail')
            }, 3000)
        }
    })
}

function getUserById() {
    return new Promise(function (resolve, reject) {
        let sucessResponse = false
        if (sucessResponse) {
            setTimeout(function () {
                resolve('get User by id 2')
            }, 2000)
        }
        else {
            setTimeout(function () {
                reject('get user fail')
            }, 1000)
        }
    })

}

function printUser() {
    return new Promise(function (resolve, reject) {
        let sucessResponse = false
        if (sucessResponse) {
            setTimeout(function () {
                resolve('Print user info')
            }, 1000)
        }
        else {
            setTimeout(function () {
                reject('Print user fail')
            }, 1000)
        }
    })
}
createUser()                       //calling function first because we want our code sync
    .then(function (res) {         // using then to consume promise
        console.log(res) //resolve
        return getUserById()         // calling it at second
    })
    .catch(function (res) {         // using catch to consume promise of rejected data
        console.log(res) //resolve
        return getUserById()
    })
    .then(function (val) {  // val is variable we can use any variable
        console.log(val)
        return printUser()
    })
    .catch(function (val) {
        console.log(val)
        return printUser()
    })
    .then(function (val) {
        console.log(val)
    })
    .catch(function (val) {
        console.log(val)
    })

