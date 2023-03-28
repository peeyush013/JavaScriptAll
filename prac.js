let a = ["anuj","ankur","anju","anuradha"]
// we need to find the common part of all element i.e. an

// step 1 
// sorting array

a.sort()
console.log(a) // [ 'anju', 'ankur', 'anuj', 'anuradha' ] 

// step 2 getting first and last element

// finding the length 
console.log(a.length)  //4

// finding first and 4th

console.log(a[0],a[3])  // anju anuradha

// storing in variables 
let b = a[0]
let c =a[3]
 // step 3 comparing the elemnts 

//  for(let i = 0 ; i < b.length ; i++){ 
//     console.log(b[i]) 
// }
// for(let i = 0 ; i < c.length ; i++){ 
//    console.log(c[i]) 
// }

// if (b[0]==c[0]){
// 	console.log(b[0])
// }

function Common1 (){
	let array1= [ 'anju', 'ankur' ] 

	for(let i = 0 ; i < array1.length ; i++){ 
		//console.log(array1[i])
       
		for(let j = 0,k=0 ; j < array1[i].length ,k=array1[i]; j++,k++){ 
			console.log(array1[i][j])


        
         
		}

           
		}
	 }




Common1()
// function CommonPart(str1,str2)
// {
	
    
    
          
//     // Compare str1 and str2 
//     for (let i = 0, j = 0; i <= str1.length - 1 , j <= str2.length - 1; i++, j++) 
//     {
//         if (str1[i] != str2[j]) 
//         {
//             break;
//         }
//         //result += str1[i];
// 		console.log(str1[i])
//     }
    
// }
// CommonPart("ankur","anuj")

function Common(str1,str2)
{
	
    
    
          
    // Compare str1 and str2 
    for (let i=0,j=0;i<str1.length,j<str2.length;i++,j++) 
    {
        if (str1[i] == str2[j]) 
        {console.log(str1[i])}
        
    }
    
}
Common("ankur","anuj")





















// let word = ["red","reddit","renault"]

// function Reqired(){
// 	let word = ["red","reddit","renault"]
// 	for (let i=0;i<word.length;i++){
// 		//console.log(word[i])

// 		for (j =0;j<word[i].length;j++){
// 			console.log(word[i][j])

			
// 		}
		
// 	}
	
// }
// console.log(Reqired())