// STRING

let me = 'peeyush'
console.log(me.length)
console.log(me.length-1)
console.log(me[0])

//  METHODS
//  1 toUpperCase()

let topper = 'Rahul'
let TOPPER = topper.toUpperCase()   // return string
console.log(TOPPER)  //RAHUL  


// 2 toLowerCase

let Hero = 'SuperMan'
let hero = Hero.toLowerCase() // return string
console.log(hero) // superman

// 3 indexOf()

let icecream = 'creambell'
let flavours = icecream.indexOf('l') //return number (index value) ,
console.log(flavours)  // 7

let flavours1= icecream.indexOf('C')
console.log(flavours1) // -1


// *it will return the index value of first come element in case of two same elements present in string.
// *it will provide negative value if there is no such element is present 

// 4 includes

let city = 'delhi'
let famous = city.includes('i')  // boolean (true or false)
console.log(famous)   // true

let famous1=city.includes('elh')
console.log(famous)  // true

let famous2=city.includes('ehi')
console.log(famous2)   // false




