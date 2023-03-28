function getUser1 (){
	return new Promise (function(res,rej){
		setTimeout(function(){
			res('promise 1 fulfilled ')
		},1000)
	})
}
function getUser2 (){
	return new Promise (function(res,rej){
		setTimeout(function(){
			res('promise 2 fulfilled ')
		},1000)
	})
}
function getUser3 (){
	return new Promise (function(res,rej){
		setTimeout(function(){
			rej('promise 3 not fulfilled ')
		},1000)
	})
}


// async function getUser (){
// 	console.time('time taken')
// 	let a =await getUser1()
// 	let b = await getUser2()
// 	let c = await getUser3()
// 	console.log(a,b,c)
// 	console.timeEnd('time taken')
// }
// getUser()


async function getUserInfo(){
	try{
	// console.time('time taken')
	let b = await Promise.all([
		getUser1(),
		getUser2(),
		getUser3()
	])
	console.log(b) 
}
catch {
	console.log('error handled ')
}
	//[
	// 	'promise 1 fulfilled ',
	// 	'promise 2 fulfilled ',
	// 	'promise 3 fulfilled ' 
	//   ]
	// console.timeEnd('time taken')  //time taken: 1.041s
}

getUserInfo()




