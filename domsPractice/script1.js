a=document.querySelector('ul')
b=document.querySelector('button')
c=document.querySelector('input')

b.addEventListener("click",function(){
	d=c.value
	e=document.createElement('li')
	e.textContent=d
	a.appendChild(e)
	c.value=""
})

