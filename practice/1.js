let marks = [10,20,30,40,50]
// let a=marks.map(function(el){
//     return el+5
// })
// console.log(a)

let a1=marks.reduce(function(acc,el){
    return acc+el
},0)
console.log(a1)