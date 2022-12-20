function Addition1 (){
	console.log('this is addition 1')
}

function Addition2(){
	console.log('this is addition 2')
}

Addition2()
Addition1()



// //----------------------------------------------

function Calculation2(){
	console.log('this is calculator 2')
}

function Calculation1(){
	setTimeout(function(){
		console.log('this is calculator 1')
	},5000)
}




Calculation1()
Calculation2()




//---------------------------------------------

function Addition1(){
	setTimeout (function(){
		console.log('print all users')
	},4000)
}

function Addition2(){
	setTimeout (function(){
		console.log('get user having id 2')
	},3000)
}

function Addition3(){
	setTimeout (function(){
		console.log('print user 2 info')
	},2000)
}


Addition1()
Addition2()
Addition3()


//------------------------------------------------------
// call back hell 
function Addition (){
	setTimeout (function(){
		console.log('print all users')

		setTimeout(function(){
			console.log('get user having id 2')

			setTimeout(() => {
				console.log('print user 2 info')
			},2000 )
		},3000)
	},4000)
}

Addition()


function getUserId (){
	setTimeout(() => {
		console.log('print all users ')

		setTimeout(() => {
			console.log('get user2 info')

			setTimeout(() => {
				console.log('get id of user 2')
			},1000);

		}, 2000);


	}, 3000);

}



getUserId()

























