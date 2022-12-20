// async call 
// api 1 = total 10 sec
// api 2 = total 8 sec
// api 1 = total 12 sec
// total time taken = 30 seconds , one by one execution 


// sync call 
// api 1 = total 10 sec
// api 2 = total 8 sec
// api 1 = total 12 sec
// total time taken = 12 seconds , all apis run in parallel



// API to get single user info


function getUserInfo(id){                           
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
       // console.log(res.data)
        return res.data
    })
}


async function getUserInfos(id,id2,id3){
    let a = await getUserInfo(id) //2
    let b = await getUserInfo(id2)//4
    let c = await getUserInfo(id3)//6
    console.log(a,b,c)
}


//getUserInfos(1,2,3)                 // will give sync result one by one 
// hence will consume more time to execute 
// it is only useful if ids are dependent on each other


// async function getUsersInfo(id,id2,id3){
//     let info = await Promise.all([
//         getUserInfo(id),
//         getUserInfo(id2),
//         getUserInfo(id3)
//     ])
//     console.log(info)
// }
// getUsersInfo(1,2,3)


// problem- in real senerio due to huge number of ids , if they are not dependent in nature 
// they will consume more time 
// solution - we have to minimise the time taken by independent ids by using parallel promises



// Promise.all()
async function getUserss(){
   let data = await Promise.all([
        Promise.resolve('hello'),
        Promise.reject('Bye'),  // will give error
        Promise.resolve('hello2'),
   ])
   console.log(data)
}
// getUserss()                  // all promise will run simultaneously and takes less time
// * in promise.all only resolved promises will execute reject promises makes the error.



async function getUserss(){
	let data = await Promise.all([
		 Promise.resolve('hello'),
		 Promise.resolve('Bye'),
		 Promise.resolve('hello2'),
	])
	console.log(data)
 }
 getUserss() 
