// Ajax=> asynch js


Synchronous
function greeting1(){
    console.log('Welcome one')
}

function greeting2(){
    console.log('Welcome two')
}

greeting2()
greeting1()


// Asynch
function addition(){
    setTimeout(()=>{
        console.log('Addition is call')
    },3000)
}

function substraction(){
    console.log('Substraction is called')
}

addition()
substraction()

// api 
// user create (10 user)=> id =1(user find) => (user print)

function createFindPrint() {
    setTimeout(() => {
        console.log('Create 10 users')
    }, 3000)

    setTimeout(() => {
        console.log('find user which having Id 2')
    }, 2000)

    setTimeout(() => {
        console.log('print id 2 user')
    }, 1000)
}

createFindPrint()

// Callback hell
// promises
// asynch await

function createFindPrint() {
    setTimeout(() => {
        console.log('Create User')

        setTimeout(() => {
            console.log('find user which having Id 2')

            setTimeout(() => {
                console.log('Print user')
            }, 1000)
        }, 2000)
    }, 3000)
}
createFindPrint()

// ======================================================

// promises  => pending , resolve , reject

// asynch => synch

// to manage asynch code
// to execute asynch code synchronously
// to execute asynch code with parallel execution 

let result = new Promise(function (resolve, reject) {
    let a = 20
    let b = 30

    if (a == b) {
        resolve('A and b are equal')
    }

    else {
        reject('A and B are not equal')
    }
})

//promise consume

result.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})


let result1 = new Promise(function (resolve, reject) {
    let a = 20
    let b = 30

    if (a == b) {
        resolve([1,2,3,4])
    }

    else {
        reject([-1,-2,-3])
    }
})

//promise consume
result1
    .then(function (x) {
        console.log(x[0])
    })
    .catch(function (y) {
        console.log(y[2])
    })




let result2 = new Promise(function (resolve, reject) {
    let a = 20
    let b = 20

    if (a == b) {
        resolve([1,2,3,4])
    }

    else {
        reject([-1,-2,-3])
    }
})

//promise consume
result2
    .then(function (x) {
        console.log(x[0])
    })
    .catch(function (y) {
        console.log(y[2])
    })
    .finally(()=>{
        console.log('Thanks you!!!')
    })

