{/* <h1 class="hone htwo hthree">hi</h1>
<h2 class="hone">bye</h2>
<p class="pone ptwo"></p>
<p class="pone"></p>
<p id="1">this is para 1</p>
<p name="para2">this is para 2</p> */}

// retrive
let id = document.getElementById('1')
console.log(id)

let nodeList = document.querySelectorAll('p')
console.log(nodeList)
console.log(nodeList.length)

let htmlcollection=document.getElementsByTagName('p')
console.log(htmlcollection)
console.log(htmlcollection.length)

let classlist=document.querySelectorAll('.pone')
console.log(classlist)                            // return node list

let classlist1=document.getElementsByClassName('pone')
console.log(classlist1)                          // return html collection

//document.getElementById('1')  -  single element
//document.getElementsByTagName('p') - htmlCollection
//document.getElementsByClassName('pone') - htmlCollection