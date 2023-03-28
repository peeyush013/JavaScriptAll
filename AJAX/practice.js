// creating  promises 


// function user1 (){
// 	return new Promise (function(res,rej){
// 		setTimeout(() => {
// 			res("promise1 completed")
// 		}, 1000);
// 	})
// }

// function user2 (){
// 	return new Promise (function(res,rej){
// 		setTimeout(() => {
// 			res("promise2 completed")
// 		}, 2000);
// 	})
// }


// function user3(){
// 	return new Promise(function(res,rej){
// 		setTimeout(() => {
// 			res('promise3 completed')
// 		}, 3000);
// 	})
// }


// person - want to upload photo
// first step - browser mei facebook link daalna
// second step - click on facebook
// third step - enter facebook id
// fourth step - enter password
// fifh step - going on profile
// sixth step - click on chnge photo
// sevent - upload new photo


// making async promises sync 

// async await

// async function getUserInfo(){
// 	let a= await user1()
// 	let b = await user2()
// 	let c = await user3()

// 	console.log(a,b,c)

// }

// getUserInfo()


// want to get time taken in performing all promses

// async function getUserInformation(){
    
// 	console.time('time taken') // from here we start how much time it takes

// 	let d = await user1()
// 	let e = await user2()
// 	let f = await user3()

// 	console.timeEnd('time taken') // to here , we have to give same parameter in strings above and here
// 	 // i.e. 6.031 sec   (promise1 time + promise2 time + promise3 time )(1sec+2+3)

// 	console.log(d,e,f)
// }

// getUserInformation()



// if promises are not dependent 


// ex.
// person want to see his results(5 sec) , person want to saw funny video(3 sec) , 
//person want play game(8 sec) 
// all three are interdependent 
// hence no need to execute one by one
// so we use parallel promises to save time 


// if we exectute one by one , total time = 5+3+8 = 16 sec
// since these are independent we use parallel promises , total time = 8 sec only 


// parallel promises types;




function user1 (){
	return new Promise (function(res,rej){
		setTimeout(() => {
			res("promise1 completed")
		}, 1000);
	})
}

function user2 (){
	return new Promise (function(res,rej){
		setTimeout(() => {
			res("promise2 resolve")
		}, 2000);
	})
}


function user3(){
	return new Promise(function(res,rej){
		setTimeout(() => {
			res('promise3 completed')
		}, 3000);
	})
}


// 1- promise.all 
// only runs if all promises are resolved 
// will return the all resolved promise in array
// give error if there is rejected promise 'ERR_UNHANDLED_REJECTION'


// async function xyz (){
// 	let a = await Promise.all([
// 		user1(),
// 		user2(),
// 		user3()
// 	])
// 	console.log(a)
// }
// xyz()


// getting time 

// async function abc (){

// 	console.time('time taken')
// 	let b = await Promise.all ([

//           user1(),
//           user2(),
//           user3()
// 	])
//     console.log(b)

// 	console.timeEnd("time taken")  
// }

// abc ()





// 2- promise.allSettled([])

// will execute in both case if promise is resolved or rejected
// not give error in case of rejected promise
// will show fulfilled for resolved , will show rejected for rejected in array as objects

// function user1 (){
// 	return new Promise (function(res,rej){
// 		setTimeout(() => {
// 			res("promise1 completed")
// 		}, 1000);
// 	})
// }

// function user2 (){
// 	return new Promise (function(res,rej){
// 		setTimeout(() => {
// 			rej("promise2 rejected")
// 		}, 2000);
// 	})
// }


// function user3(){
// 	return new Promise(function(res,rej){
// 		setTimeout(() => {
// 			res('promise3 completed')
// 		}, 3000);
// 	})
// }

// async function xyz (){
// 	let c= await Promise.allSettled([
// 		user1(),
// 		user2(),
// 		user3()
// 	])
// 	console.log(c)
// }
// xyz()


// 3- promise.race()

// will run on first come firse bases 

// will give first promise if first promise is resolved
// will give error if first promise is rejected


// function user1 (){
// 	return new Promise (function(res,rej){
// 		setTimeout(() => {
// 			res("promise1 completed")
// 		}, 2000);
// 	})
// }

// function user2 (){
// 	return new Promise (function(res,rej){
// 		setTimeout(() => {
// 			rej("promise2 rejected")
// 		}, 1000);
// 	})
// }


// function user3(){
// 	return new Promise(function(res,rej){
// 		setTimeout(() => {
// 			res('promise3 completed')
// 		}, 3000);
// 	})
// }

// async function xyz (){
// 	let c= await Promise.race([
// 		user1(),
// 		user2(),
// 		user3()
// 	])
// 	console.log(c)
// }
// xyz()




// 4- promise.any()

// will give only resolved promise 
// will ignore all the rejected promises
// will not give error on rejected promise 
// will give first resolved promise

function user1 (){
	return new Promise (function(res,rej){
		setTimeout(() => {
			rej("promise1 rejected")
		}, 1000);
	})
}

function user2 (){
	return new Promise (function(res,rej){
		setTimeout(() => {
			rej("promise2 rejected")
		}, 2000);
	})
}


function user3(){
	return new Promise(function(res,rej){
		setTimeout(() => {
			res('promise3 completed')
		}, 3000);
	})
}

async function xyz (){
	let c= await Promise.any([
		user1(),
		user2(),
		user3()
	])
	console.log(c)
}
xyz()







































