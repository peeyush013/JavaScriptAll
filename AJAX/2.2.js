promise1 = new Promise (function(res,rej){
	let a = 4
	let b =[5,10,15,20]

	if (b.length == a){
		res('matched')
	}

	else{
		rej('not matched')
	}
})

promise1.then (function(result){
	console.log(result)
}).catch(function(result){
	console.log(result)
}).finally(function(){
	console.log(' i am fixed ')
})

