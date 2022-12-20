// // object literal
let mobile = {
    brand : 'oneplus',
    colour:'blue',
    price:10000
}
console.log(mobile)

mobile.brand='iphone'
mobile['colour']='black'

console.log(mobile)


let mobileA = {
    brand : 'samung',
    colour:'blue',
    price:20000
}
console.log(mobileA)





// oops - object oriented programming



// template is a blue print  or structure 
// example- asmission fourm 


// name-() , age (),gender ()  // we only have to put values , property remains same


// oops
// function constructor
//program 1.1 (object with properties only)

function Mobile (brandName,colour,price){
    this.brandName = brandName
    this.colour=colour
    this.price=price
}

let mobile1 = new Mobile('oneplus','blue',15000)
console.log(mobile1)


console.log(mobile1)



let mobile2 = new Mobile('samsung','black','18000')
console.log(mobile2)

let mobile3 = new Mobile('iphone','aquaBlue','2')
console.log(mobile3)






// program 1.2

function Student(firstName,lastname,rollnumber,marks){
    this.firstName=firstName
    this.lastname=lastname
    this.rollnumber=rollnumber
    this.marks=marks
}

let spruha = new Student('spruha','patil',1,100)
let sonu = new Student('sonu','sharma',2,33)
console.log(spruha)
console.log(sonu)
console.log(spruha.marks)  //100



// program 1.3

function Animal(legs,tail,food){   // setting the properties to use in objects
    this.legs=legs
    this.tail=tail
    this.food=food
}

let cow = new Animal(4,"yes","herbivorous")   
let lion = new Animal(4,"yes","carnivorous")

console.log(cow)


// program 2 ( objects with properties , method)


function Student (firstName,lastName,section,rollNumber){
    this.firstName=firstName                 // property
    this.lastName=lastName                  // property
    this.section=section                    // property
    this.rollNumber=rollNumber             // property
    this.fullName= function(){
        console.log(this.firstName,this.lastName)
    }

}



let mohit = new Student('mohit','rao','b',11)
console.log(mohit)
mohit.fullName()

let rohit = new Student('rohit','rao','a',12)
console.log(rohit)
rohit.fullName() 



// 2. e6class 
// class is also a template or structure

class Mobile {
    model = 'oneplus7'
    colour='black'
    price='10000'
}
let iphone = new Mobile()
console.log(iphone)

let samung = new Mobile('samsunga1','blue','50000')
console.log(samung)

// problem - we are getting same properties but also same values which we cant set

// solution using constructor in class



class Phone{
    constructor (brandname,colour,price){
        this.brandname=brandname
        this.colour=colour
        this.price=price
    }
}

let realme = new Phone ('realme','blue',1000)
console.log(realme)


let oppo = new Phone('oppo','black',15000)
console.log(oppo)



// homework
//1 . using function constructor , create a constructor named Cars, setting its properties (modelname,
// colour,registrationNumber) , then create 4 objects from it named - bmw,audi,ferrari,tata


//2. using E6class , create a class named Bikes , setting any  4 properties to it and create 5 objects
// from it named - honda,tvs,hero,yamaha,royalEnfield.




































































































