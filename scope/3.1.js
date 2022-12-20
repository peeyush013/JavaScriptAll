// //function declartion
// function intro(){
//     console.log('heya')
// }

// // //function expression
// let intro = function (){
//     console.log('hey')
// }

// // //arrow function
// let intro2 = ()=>{
//     console.log('hello')
// }


// difference between arraow function and function expression

let shyam = 'topper'
// console.log(shyam)

// scope of let is local in windows

console.log(window.shyam) // undefined

// scope of var is global in window
var ram = 'topper'
console.log(window.ram)    // topper 

// prompt('heyyy')      // will give a pop up on browser
// window.prompt('heyyyyy')



// function expression in function expression has window scope


let language = {
    backend : 'java',
    frontend: 'javascript',
    display: function (){
        console.log(this.backend+this.frontend)    // javajavascript
        // here this scope is language
        console.log(this==language)      //true

        let displayLanguage = function(){
            console.log(this.backend+this.frontend) //ud+ud =NaN
            //here this scope is wnidow
            console.log(this==window)  //true
        }
        displayLanguage()
    }
}
language.display()


var backend = 'python'
var frontend = "html"
// var has global scope not window 
let language1 = {
    backend : 'java',
    frontend: 'javascript',
    display: function (){
        console.log(this.backend+this.frontend)    // javajavascript
        // here this scope is language
        console.log(this==language)      //true

        let displayLanguage = function(){
            console.log(this.backend+this.frontend) //pythonhtml
            //here this scope is wnidow and windows has variable
            console.log(this==window)  //true
        }
        displayLanguage()
    }
}
language1.display()


//arrow function in function expression has its parents scope

let bike = {
    modelName:'tvsRaider',
    modelYear:2022,
    price:100000,

    display:function(){
        console.log(this.modelName+this.modelYear) //tvsRaider2022
        //this scope is bike

        let dispaly1 = () =>{
            console.log(this.modelName+this.modelYear) //tvsRaider2022
            // display1 is arrow function hence scope is parents scope is bike
        }
        dispaly1()
    }
    
}
bike.display()



let car = {
    modelName:'toyotaCiaz',
    modelYear:2015,
    price:1500000,
    display: ()=>{
        console.log(this.modelName+this.modelYear) //NaN
        // arrow function has scope of its parent 
        // and car is parent , and parent scope is window 

        dispaly1=()=>{
            console.log(this.modelName+this.modelYear) //NaN
        }
        dispaly1()
    }
}
car.display()



var modelName = "marcedezBenz"
var modelYear = 2010
let car1 = {
    modelName:'toyotaCiaz',
    modelYear:2015,
    price:1500000,
    display: ()=>{
        console.log(this.modelName+this.modelYear) //marcedezBenz2010
         // arrorw function has window scope and
         //window has global var

        dispaly1=()=>{
            console.log(this.modelName+this.modelYear) //marcedezBenz2010
        }
        dispaly1()
    }
}
car1.display()


































