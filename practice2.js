let firstName = ["roma","ronu","riya","rishi"]

b= firstName.sort()
console.log(b)
// [ 'anana', 'anjkur', 'anju', 'anjuj', 'anjuradha' ]

function GetFirstAndLast(){

	firstName.sort()
firstName.splice(1,firstName.length-2)
// [ 'anana', 'anjuradha' ]

console.log(firstName)

function CommonElement(str1,str2){

	
	for (let i=0,j=0;i<str1.length,j<str2.length;i++,j++) 
	{
		if ( str1[i] == str2[j]) 
		
		{console.log(str2[j])}   
		
	}
	
}
CommonElement(...firstName)

}
GetFirstAndLast()
console.log(...firstName)