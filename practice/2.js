
let scores = [
    9, 80, 10, 100, 20, 5, 70 ,150
]

// first we find the maximum value

console.log(Math.max(
    9, 80, 10, 100, 20, 5, 70 
))  

// max value 100 , its a three digit number 
// add 100 to every element so to make evry element three digit number .

a=scores.map(function(el){
    return el+100
})
console.log(a)  //[109,180,,110,200,120,105,170]

// now we have all elements of three digit numbers we can apply sort()

console.log(a.sort())

// we got [105,109,110,120,170,180,200]

// now we will subtract 100 from every element

b=a.map(function(el){
    return el-100
})
console.log(b)
// finally we got the sorted array b [5,9,10,20,70,80,100]
















