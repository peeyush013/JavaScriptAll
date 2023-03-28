function getUserInfo(id){                           
  return fetch(`https://reqres.in/api/users/${id}`)
  .then(function(res){
      return res.json()
  })
  .then(function(res){
     // console.log(res.data)
      return res.data
  })
}


async function getUserInfos(id,id2,id3){
  let a = await getUserInfo(id) //2
  let b = await getUserInfo(id2)//4
  let c = await getUserInfo(id3)//6
  console.log(a,b,c)
}


getUserInfos(1,2,3)  