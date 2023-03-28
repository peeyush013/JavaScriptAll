a = document.querySelectorAll("ul")
b = document.querySelector('#but')
c = document.querySelector('input')

b.addEventListener("click",function(){
	d=c.value 
	e= document.createElement('li')
	e.textContent=d
	a.appendChild(e)
	c.value=""

})
