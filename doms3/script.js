// // document.querySelector('h1')
// // .addEventListener('click',function(){
// //     document.querySelector('h1').style.color='yellow'
// //     document.querySelector('h1').style.backgroundColor='red'
// // })


// //<p class="friends" id='para' name="mayuri">This all are my friends</p>

// //to find html element

// //1. by tagName
// let byTagName=document.querySelector('p')
// console.log(byTagName)

// //2. byClassName
// let byClassName=document.querySelector('.friends')
// console.log(byClassName)

// //3. byID
// let byID=document.querySelector('#para')
// console.log(byID)

// //4. Common formula => tagname[attribute='value']
// let commonFormula=document.querySelector('p[name="mayuri"]')
// console.log(commonFormula)


document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color='white'
    document.querySelector('h1').style.backgroundColor='black'
})

// <p class="players" id="ply" name="viratkohli">best batsman at present</p>
let bytagname=document.querySelector('p')
console.log(bytagname)

let byclass=document.querySelector('.players')
console.log(byclass)

let byid = document.querySelector('#ply')
console.log(byid)

let bycommnformula = document.querySelector('p[name="cricket"]')
console.log(bycommnformula)

