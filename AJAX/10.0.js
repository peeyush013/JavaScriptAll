// //promise.all
// //promise.allSettled
// //promise.race
// //promise.any


// // 1. promise.all  
// // will provide results for all resolved promises but will shotcircuit if there is rejeted promise
// // will return in array if all promises fulfilled

// async function getUser1() {
//     let result1 = await Promise.all([
//         Promise.resolve('first resolved'),
//         Promise.resolve('second resolved'),
//         Promise.resolve('third resolved')
//     ])
//     console.log(result1)     //['first resolved', 'second resolved', 'third resolved' ]  
//     // here all promises are fulfilled so returned array
// }
// getUser1()

//disadvantage
// will shotCircuit and give error in starting if even a single promise got rejected

// async function getUser2() {
//     let result2 = await Promise.all([
//         Promise.resolve('first resolved'),
//         Promise.reject('first rejected'),
//         Promise.resolve('second resolved ')
//     ])
//     console.log(result2)       // will shotCircuit code ,code: 'ERR_UNHANDLED_REJECTION' 
// }
// getUser2()


// we can handle error by using new promise 
// async function getUser3() {
//         let result3 = await Promise.all([
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('first resolve')
//             }, 2000)
//         }),
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('first reject')
//             }, 1000)
//         }),
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('second reject')
//             })
//         }),

//     ])

//     console.log(result3)  // will give all resolve and rejected promises in array
// }
// getUser3()

//2. promise.allSettled
// async function getUser4() {
//     let result4 = await Promise.allSettled([
//         Promise.resolve('first resolved'),
//         Promise.resolve('second resolved'),
//         Promise.reject('first rejected'),
//         Promise.reject('second rejected')
//     ])
//     console.log(result4)   // will return all resolved and rejected promises in array whose
//     // elemts are objects
// }
// getUser4()

// async function getUser5() {

//         let result5 = await Promise.allSettled([
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('first resolve')
//             }, 2000)
//         }),
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('second resolve')
//             }, 1000)
//         }),
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('second reject')
//             })
//         }),

//     ])

//     console.log(result5)  // will return all resolved and rejected promises in array as objects
// }
// getUser5()

// //3. promise.race()
// will give first resolved promise 
    // and give error if first occurance is rejected promise


async function getUser6() {
    let result6 = await Promise.race([
                Promise.reject('first resolve'),
                Promise.resolve('second resolved'),
                Promise.reject('first rejected'),
                Promise.reject('second rejected')
            ])
    console.log(result6) // error
}
getUser6()

// async function getUser7() {
//     let result7 = await Promise.race([
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('reject first')
//             }, 5000)
//         }),
//         new Promise(function ( reject) {
//             setTimeout(function () {
//                 reject('reject second')
//             }, 2000)
//         }),
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('resolve 1')
//             }, 3000)
//         }),
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('resolve 2')
//             }, 4000)
//         })
        
//     ])
//     console.log(result7)  // reject second 
//// will give result of first occured either resolved or rejected
// }
// getUser7()

// 4. Promise.any([])

// will give first resolved promise occured , did nt get affected by rejected promise

// async function getUser8() {
//     let result8 = await Promise.any([
//                 Promise.reject('first rejected'),
//                 Promise.reject('second rejected'),
//                 Promise.reject('third rejected'),
//                 Promise.resolve('first resolved')
//             ])
//     console.log(result8) // first resolved

// }
// getUser8()

// //4. promise.any([])

// async function getUser9() {
//     let result9 = await Promise.any([
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('first rejected')
//             }, 1000)
//         }),
//         new Promise(function ( reject) {
//             setTimeout(function () {
//                 reject('second rejected')
//             }, 2000)
//         }),
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('first resolved')
//             }, 3000)
//         }),
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('second resolved')
//             }, 4000)
//         })
        
//     ])
//     console.log(result9)
// }
// getUser9()













