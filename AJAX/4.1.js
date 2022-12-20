let names = ['anuj','rahul','roma','dilip']
// let a1= new Promise (function(resolve,reject){
// 	if(names.length==4){
// 		resolve('correct')
// 	}
// 	else{
// 		reject('incorrect')
// 	}
// })
// a1.then(function(res){
// 	console.log(res)
// })
// .catch(function(rej){
// 	console.log(rej)
// })
// .finally(function(){
// 	console.log('this is fix')
// })



function getUsersData() {
	return new Promise (function(res,rej){
		if (names[1]=='roma'){
			res('users data printed')
		}
		else{
			rej('error in printing users data')
		}
	})
}

function getUserId() {
	return new Promise (function(res,rej){
		if (names[1]=='roma'){
			res('user id printed')
		}
		else{
			rej('error in printing user id')
		}
	})
}

function getUserInfo() {
	return new Promise (function(res,rej){
		if (names[1]=='roma'){
			res('user info printed')
		}
		else{
			rej('error in printing user info')
		}
	})
}

getUsersData()
.then(function(res){
	console.log(res)
	return getUserId()
})
.catch(function(res){
	console.log(res)
	return getUserId()
})
.then(function(res){
	console.log(res)
	return getUserInfo()
})
.catch(function(res){
    console.log(res)
	return getUserInfo()
})
.then(function(res){
	console.log(res)
})
.catch(function(res){
	console.log(res)
})
.finally(function(){
	console.log('thankYou')
})



