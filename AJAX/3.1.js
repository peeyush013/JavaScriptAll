function getAllUsers (){
	return new Promise (function(res){
		setTimeout(() => {
			res ('all users created')
		}, 3000);
	})
}

function getSpecificUserById (){
	return new Promise (function(res){
		setTimeout(() => {
			res('got user by id')
		},2000);
	})
}

function getUserInfo(){
	return new Promise(function(res){
		setTimeout(() => {
			res('got user details')
		}, 1000);
	})
}

getAllUsers()
.then (function(result){
	console.log(result)

	return getSpecificUserById()
})
. then(function(result){
	console.log(result)

	return getUserInfo()
})
.then (function(result){
	console.log(result)
})







