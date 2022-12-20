function intro (){
    console.log('hi ')
}
function intro1 (){
    console.log('bye')
}

intro1()    // bye
intro()     // hi
// bye will print first as it called first


function destination (){
    setTimeout(function() {
       console.log('final destination is kashmir') 
    }, 0001)
}
function startingPoint(){
    console.log('starting point is delhi')
}
destination()
startingPoint()
// delhi will print first irrespective of calling later as is has no time limit
// kashmir will print last as we boud the time 


function travelItionary(){
    setTimeout(function() {
        console.log('last destination is kerala')
    },0003 )

    setTimeout(function() {
        console.log('midpoint is banglore')
    }, 0002)
    
    setTimeout(function() {
        console.log('starting from mumbai')
    }, 0001)
    
}
travelItionary()

// mumbai will print first as we provide least calling time
// kerala will print last as we provide highest calling time

// call back hell triangle
function MountEverest(){
    setTimeout(function() {
        console.log('reaching the base camp')
        setTimeout(function(){
            console.log('climibing 4000 metres to bottleneck')
            setTimeout(function() {
                console.log('climbing remaining 4448 metres')
            
            }, 250)

        },500)       
    
    }, 1000)

}

MountEverest()


