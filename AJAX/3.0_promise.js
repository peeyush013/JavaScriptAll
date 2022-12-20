

// let pro2 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve('equal')
//     }
//     else{
//         reject('not equal')
//     }

// })
// pro2.then(function(a){
//     console.log(a)
// })
// .catch(function(a){
//     console.log(a)
// })
// .finally(function(){
//     console.log("finally block always run")
// })



// program 2
// let pro3 = new Promise(function (resolve, reject) {
//     let str = 'mol'
//     if (str.startsWith('a')) {
//         resolve('string starting with a ....')
//     }
//     else {
//         reject('string does not starts with a')
//     }
// })

// pro3
//     .then(function (str) {
//         console.log(str)
//         return 1
//     })
//     .then(function (q) {
//         console.log(q)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log('I will print anyway')
//     })
// //----------------------------------------------->
// function getInfo() {

//     setTimeout(function () {
//         console.log('user created')
//     }, 3000)

//     setTimeout(function () {
//         console.log('user info by id')
//     }, 2000)

//     setTimeout(function () {
//         console.log('user info print')
//     }, 1000)
// }
// getInfo()

// function getInfo() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('user info by id')
//             setTimeout(function () {
//                 console.log('user info print')
//             }, 1000)
//         }, 2000)
//     }, 3000)

// }
// getInfo()

// promises 


function createUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function getUserId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get user by Id')
        },2000)
    })
}

function userInfo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('get user print info')
        },1000)
    })
}


createUser()
.then(function(str){
    console.log(str)  
    return getUserId()
})
.then(function(str){
    console.log(str)
    return userInfo()
})
.then(function(str){
    console.log(str)
    
})