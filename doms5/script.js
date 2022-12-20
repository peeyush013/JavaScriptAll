let ullist=document.querySelector('ul')
let inputtext=document.querySelector('input')
let clickbutton=document.querySelector('button')

clickbutton.addEventListener("click",function(){
    text=inputtext.value
    newli=document.createElement("li")
    newli.textContent=text
    ullist.appendChild(newli)
    inputtext.value = ""

})