// let ullist=document.querySelector('ul')
// let inputtext=document.querySelector('input')
// let clickbutton=document.querySelector('#bt')

// clickbutton.addEventListener("click",function(){
//     text=inputtext.value
//     newli=document.createElement("li")
//     newli.textContent=text
//     ullist.appendChild(newli)
//     inputtext.value = ""

// })

let ullist=document.querySelector('ul')
let inputtext=document.querySelector('input')
let clickbutton=document.querySelector('#bt')

clickbutton.addEventListener("click",function(){
    let text=inputtext.value
    let newli=document.createElement('li')
    newli.textContent=text
    // createButtons(newli) // step 3
    ullist.appendChild(newli)
    inputtext.value="clear the text and add vegetable here"

})

function createButtons(element){
    let up = document.createElement('button')
    up.textContent='Up'
    up.className='up'
    element.appendChild(up)

    let down=document.createElement('button')
    down.textContent="Down"
    down.className='down'
    element.appendChild(down)

    let remove =document.createElement('button')
    remove.textContent="Remove"
    remove.className='remove'
    element.appendChild(remove)


}