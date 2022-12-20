//AJAX => Asynchronous javascript

//javascript => sysnchronous
//line by line extecution


//sync code
// function add1() {
//     console.log('I am add1')
// }

// function add2() {
//     console.log('I am add2')
// }

// add2() //I am add2
// add1() // I am add1

//=============================================

//Async

//settimeout => asynch nature => 1. callback function , 2. time(millisec)
// function addition() {
//     setTimeout(function () {
//         console.log('addition call')
//     }, 3000)
// }

// function sub() {
//     console.log('Sub call')
// }

// addition() //3000 hold
// sub() 
// //sub call
// //after 3 sec
// //addition call

//========================================================

//api 

//create user(10 user)
//get user by id(2)
// print info

//async => sync

// function createGetPrint() {
//     setTimeout(() => {
//         console.log('Create 10 users')
//     }, 3000)

//     setTimeout(() => {
//         console.log('get id 2 user')
//     }, 2000)

//     setTimeout(() => {
//         console.log('Print user which having id 2')
//     }, 1000)
// }

// createGetPrint()


//1. callBack hell

function CreateGetPrint() {
    setTimeout(function () {
        console.log('Create 10 users')

        setTimeout(function () {
            console.log('Get user by id 2')

            setTimeout(function () {
                console.log('Print user which having id 2')
            }, 1000)
        }, 2000)
    }, 3000)
}

//6000 ms => 6 sec
CreateGetPrint()

