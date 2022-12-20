{/* <h1>student name</h1>
<button>click here</button> */}

let heading = document.querySelector('h1')
console.log(heading)

let button = document.querySelector('button')
console.log(button)

button.addEventListener("click",function(){
    heading.textContent='anuj'
    heading.style.color='white'
    heading.style.backgroundColor='black'
    
})


