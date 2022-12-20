
//Actual difference between arraow function and function expression

//function declartion
// function add() {
//     console.log('hello')
// }

// //function expression
// let greet = function () {
//     console.log('Welcome')
// }


// //arrow function
// let init = () => {
//     console.log('hii')
// }


// let x = 20  //local
// console.log(x) //20
// //window
// console.log(window.x) //undefined

// var a=30 //global
// console.log(a) //30
// console.log(window.a)//30

// //prompt('hello guyes')

// window.prompt('welcome')


//Program 1
// let info = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     display: function () {
//         console.log(this == info)
//         console.log(this.firstName + this.lastName)

//         let greet = function () {
//             console.log(this == window)
//             console.log(this.firstName + this.lastName)
//             //undefined+undefined=NaN
//         }
//         greet()
//     }
// }
// //console.log(info.display)  //print
// info.display() //call

//==================================================================

//Program 2
// var firstName="Vaibhav"
// var lastName="Mali"
// let info = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     display: function () {
//         console.log(this == info)
//         console.log(this.firstName + this.lastName) //MayuriKatwe

//         let greet = function () {
//             console.log(this == window)
//             console.log(this.firstName + this.lastName) //VaibhavMali
//         }
//         greet()
//     }
// }
// //console.log(info.display)  //print
// info.display() //call

//=========================================================

//Program 3
// let person = {
//     firstName: "Rahul",
//     lastName: "Rao",
//     info: function () {
//         //this==person
//         console.log(this.firstName + this.lastName) //RahulRao

//         let display = () => {
//         //parent's this scope
//             console.log(this.firstName + this.lastName)
//         }
//         display() //RahulRao
//     }

// }
// person.info()

//========================================================

//Program 4

// let person = {
//     firstName: "Rahul",
//     lastName: "Rao",
//     info: () => {
//         //this==window
//         console.log(this.firstName + this.lastName) //NaN

//         let display = () => {
//             //parent's this scope
//             //this==window
//             console.log(this.firstName + this.lastName)//NaN
//         }
//         display()
//     }

// }
// person.info()

//===============================================================
var firstName="sham"
var lastName="kulkarni"
let person = {
    firstName: "Rahul",
    lastName: "Rao",
    info: () => {
        //this==window
        console.log(this.firstName + this.lastName) //shamkulkarni

        let display = () => {
            //parent's this scope
            //this==window
            console.log(this.firstName + this.lastName)//shamkulkarni
        }
        display()
    }

}
person.info()
Footer