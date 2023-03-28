// let a= [1,2,3,4,5,6,7,8,9,10]

// let b= a.map(function(el,index,arr){
//     return arr
// })
// console.log(b)

// function da(a){
//     let q1 = a.concat(a)
//     return q1
// }
// console.log(da([1,2,3,4,5]))




a= [1,2,3,4,5]
b=a.concat(a)
console.log(b)




































// let firstName = ["anju","anjana","anuradha","ankur","anuj"]
// console.log(firstName.length) //5

// // sorting the array
// firstName.sort()
// console.log(firstName)   // [ 'anjana', 'anju', 'ankur', 'anuj', 'anuradha' ]

// we will take the first and the last element of array always 
// beacuse after sorting minimun starting elements of strings are matched in first and last string only
// we already know length of array hence first element and last element will fetch




// function abcd(){

// 	firstName.sort()
// 	let abcde =[]
// 	firstName.shift()
// 	firstName.pop()
// 	abcde.unshift(firstName.pop())
// 	abcde.unshift(firstName.shift())
	
// }



// function CommonElement(str1,str2){
// 	 // Compare str1 and str2 
// 	 for (let i=0,j=0;i<str1.length,j<str2.length;i++,j++) 
// 	 {
// 		 if (str1[i] == str2[j]) 
// 		 {console.log(str1[i])}   // an , hence an is the common starting elements in all
		 
// 	 }
// }
// CommonElement(firstName[0],firstName[4])



// let firstName = ["anju","anjana","anuradha","ankur","anuj"]


// // sorting the array
// firstName.sort()
// // we only wanted first and last element of array because they have minimum common starting elements
// // hence always splicing form first and length-2
// // it will cut the array and always returns first and last element in array
// firstName.splice(1,firstName.length-2)



// function CommonElement(str1,str2){
// 	// Compare str1 and str2 
// 	for (let i=0,j=0;i<str1.length,j<str2.length;i++,j++) 
// 	{
// 		if (str1[i] == str2[j]) 
// 		{console.log(str1[i])}   // an , hence an is the common starting elements in all
		
// 	}
// }
// CommonElement(...firstName)
// // we will use spread method here 



// firstName.sort()
// firstName.splice(1,firstName.length-2)



// for finding common prefix 
let firstName = ["anju","ankana","anjuradha","anjkur","anjuj"]

function GetFirstAndLast(){

	firstName.sort()
	console.log(firstName)
	// [ 'anjana', 'anjkur', 'anju', 'anjuj', 'anjuradha' ]
firstName.splice(1,firstName.length-2)
console.log(firstName) // [ 'anjana', 'anjuradha' ]


function CommonElement(str1,str2){

	
	for (let i=0,j=0;i<str1.length,j<str2.length;i++,j++) 
	{
		if (str1[i] != str2[j]) {
			break
		}
		{console.log(str1[i])}   
		
	}
}
CommonElement(...firstName)

}
GetFirstAndLast()

// function CommonElement(str1,str2){

	
// 	for (let i=0,j=0;i<str1.length,j<str2.length;i++,j++) 
// 	{
// 		if (str1[i] == str2[j]) 
// 		{console.log(str1[i])}   
		
// 	}
// }
// CommonElement(...firstName)
