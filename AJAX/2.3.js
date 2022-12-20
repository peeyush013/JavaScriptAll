let promise1 = new Promise ( function(resolve,reject){
	if ( 0 == false ){
		resolve('correct')
	}
	else{
		reject ('incorrect')
	}
})

promise1
.then(function(x){
	console.log(x)
})
.catch(function(x){
	console.log(x)
})
.finally(function(){
	console.log("fixed")
})

let promise2 = new Promise (function(resolve,reject){
	if (10==11){
		resolve('resolved')
	}
	else {
		reject('rejected')
	}
})
promise2
.then(function(x){
	console.log(x)
})
.catch(function(x){
	console.log(x)
})
.finally(function(){
	console.log('thanx')
})

// doubt - result are coming async not sync























