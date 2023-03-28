// function first (a,b){
// 	return a-b
// }

// function second (){
// 	console.log("second execution")
// }
// second()
// console.log(first (10,5))


// // setimeout function
// function third (a,b){
// 	setTimeout(() => {
// 		console.log( a+b)
// 	}, 6000);
// }

// function fourth (a,b){
// 	setTimeout(() => {
// 		console.log(a*b)
// 	}, 5000);
// }
// third(2,3)
// fourth(2,3)

function fifth(){
	setTimeout(() => {
		console.log('step1')
		setTimeout(() => {
			console.log('setp2')
			setTimeout(() => {
				console.log('step3')
			}, 1000);
		}, 2000);
	}, 100000);
}

fifth()




