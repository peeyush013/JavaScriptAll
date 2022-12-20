let ulList = document.querySelector('ul')
let addButton = document.querySelector('#btn')
let inputBox = document.querySelector('input')


//STEP 1
// addButton.addEventListener('click', function () {
//     let text = inputBox.value
//     let newLi = document.createElement('li') //<li></li>
//     newLi.textContent = text //<li>banana</li>
//     //STEP 3
//     createButtons(newLi)
//     ulList.appendChild(newLi)
//     inputBox.value = ""
// })
addButton.addEventListener("click",function(){
    let text = inputBox.value
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = text //<li>banana</li>
    // //STEP 3
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputBox.value = ""
})

//STEP 4
ulList.addEventListener('click', function (event) {
    // console.log(event.target)
    // console.log(event.target.tagName)
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            let li = event.target.parentElement  //li
            let ul = li.parentElement //ul
            ul.removeChild(li) //remove li from ul
        }

        if (event.target.className == 'up') {
            let li = event.target.parentElement //li
            let ul = li.parentElement //ul
            let prev = li.previousElementSibling
            if (prev) {
                ul.insertBefore(li, prev)
            }
        }

        if (event.target.className == 'down') {
            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ul.insertBefore(next, li)
            }
        }
    }
})


//STEP 2
function createButtons(element) {
    // <button class="remove">Remove</button>
    // <button class="up">Up</button>
    // <button class="down">Down</button> 
    let remove = document.createElement('button') //<button></button>
    remove.textContent = "Remove" //<button>Remove</button>
    remove.className = "remove" //<button class="remove">Remove</button>
    element.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.className = "up"
    element.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'Down'
    down.className = 'down'
    element.appendChild(down)
}