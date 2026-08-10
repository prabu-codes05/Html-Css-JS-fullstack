
            //Async await

 const normal=() =>{
  return 1
}
console.log(normal())

const awaitasync = async() =>{
  return 1
}
console.log(awaitasync())

//yesle pending garauxa so we will use await now to remove pending 

/*const normal=() =>{
  return 1
}

const awaitasync = async() =>{
  const val = await normal()
  console.log(val)
}
awaitasync()*/

//Example
function cooking(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("let Him Cook..");
      res("cooking is complicated");
    },3000);
  });
}

function making(){
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
      console.log("Making some cookies");
      res("cookies are ready");
    },2000);
  });
}

const func = async()=>{
  console.log("Cooking is not good");
  const data = await cooking();
  console.log(data);
  const make = await making();
  console.log(make);
  console.log("lets eat now");
};
func();




             

 