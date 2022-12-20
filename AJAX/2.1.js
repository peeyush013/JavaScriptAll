// javascript is sync in nature normally
// problem- takes too much time and will run all codes one by one


function worldCupSemiFinal1 (){
    console.log('pakistan beats newzealand')
}
function worldCupSemiFinal2 (){
    console.log('england beats india')
}
worldCupSemiFinal2()
worldCupSemiFinal1()

// ajax will remove the problem , it will make code async and code can run simultaneously

function worldCupFinal(){
    setTimeout(() => {
        console.log('England is Winner')
    },0.5);
}

function worldCupFinal1 (){
    console.log('pakistan is runner up')
}

worldCupFinal()
worldCupFinal1()

// but in ajax it will async all data but for some programs we need fixed sync data 


function OpenSelectDelete (){
   setTimeout(function(){
    console.log('open')
   },3)

   setTimeout(() => {
    console.log('select')
   }, 2);

   setTimeout(() => {
    console.log('delete')
   }, 1);
}

OpenSelectDelete()

// we have to make async data as sync for some special codes which is fix in nature

// call back hell , we cant fetch or reuse the code but we can make async as sync


function ClickInsertAdd(){
    setTimeout(() => {
        console.log('click')

        setTimeout(() => {
            console.log('insert')
            
            setTimeout(() => {
                console.log('add')
            }, 4);
        }, 5);
    }, 6);
}
// will run click first only after than insert and then add

ClickInsertAdd()

// we use promises for reuse the async code which we made sync

// promises
let a = 1
let b = 2
promise1 = new Promise(function(res,rej){
    

    if (a==b){
        res('same values inserted')
    }
    else{
        rej('different values inserted')
    }
})
console.log(promise1)

// we make promise so that we can consume hence we have to store it 
promise1.then(function(x){
    console.log(x)
},function(y){
    console.log(y)
})



let promise2 = new Promise(function(res,rej){
    a = 2 
    if (a==b){
        res([1,1,2,2])
    }
    else if (a!=b){
       rej([-1,-1,-2,-2])
    }
})

promise2
    .then(function(x){
    console.log(x[3])
})
    .catch(function(y){
    console.log(y[1])
})



let promise3 = new Promise (function(res,rej){
    if (a+1==b-1){
        res([0,1,2,3])
    }
    else if (a-1==b+1){
        rej([-1,-2,-3,-4])
    }
    else if (a==b){
        rej([-10,-20,-30,-40])
    }
})

promise3
    .then(function(x){
        console.log(x[2])
    })
    .catch(function(y){
        console.log(y[2])
    })
    .finally(()=>{
        console.log('ok done')
    })

    // function ClickInsertAdd(){
    //     setTimeout(() => {
    //         console.log('click')
    
    //         setTimeout(() => {
    //             console.log('insert')
                
    //             setTimeout(() => {
    //                 console.log('add')
    //             }, 4);
    //         }, 5);
    //     }, 6);
    // }
    
    
    // ClickInsertAdd()
let c=10
let d= 10
    let promise4 = new Promise (function(res,rej){
        if (c==d){
            res('click')
            
        }
        else if (a!=b){
            rej('click again on correct icon')
        }
        
    })
    promise4
    .then(function(x){
        console.log(x)
    })
    .catch(function(y){
        console.log(y)
    })
    .finally(()=>{
        console.log('insert')
    })
    .finally(()=>{
        console.log('delete')
    })
    






















