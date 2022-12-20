// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>my code 1</title>
// </head>
// <body>
//     <h1>oneplus</h1>
//     <ul>
//         model-nord
//     </ul>
//     <input type="text">
//     <button>click here to add specification</button>
// </body>
// </html>

ullist=document.querySelector("ul")
inputtext=document.querySelector("input")
clickbutton=document.querySelector("button")

clickbutton.addEventListener("click",function(){
    text=inputtext.value
    newli=document.createElement('li')
    newli.textContent=text
    ullist.appendChild(newli)
    inputtext.value="please type specifications"
})