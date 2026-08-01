//loop-revolve around until a condition is meet
 
//for(intialization; Condition; increment/decrement);

// //for loop

// for (let i = 0; i <= 5; i++){
//   console.log(i)
// }

// for (let i = 5; i >= 0; i--){
//   console.log(i)
// }


//while loop

// let k=5
// while (k>= o) {
//   console.log(k)
//   k--
// }


// do while

// let l = 5
// do { 
//   l++
//   console.log(l)
// } while (l >= 0)
    

// ==========================================Nested Loop=======================================================
   
// console.log("==============================")
// for (i = 0; i <= 5; i++){
//     let row=""
//     for (j = 0; j <= i; j++){
//         row=+j
//         console.log(j)
//     }
// }

// for (i = 5; i <= 5; i--){
//     let row=""
//     for (j = 0; j <= i; j++){
//         row=+j
//         console.log(j)
//     }
//     console.log(row)
// }



//===========================================while loop===============================================================//


// let k = 5
// while (k >= 0) {
//     k--
//   console.log(k)  
// }



//==================================================nested loop===========================================================//

// for (let i = 1; i <= 5; i++){
//     let row = ""
//     for (let j = 1; j <= 5; j++){
//         row +="5" 
//     }
//     console.log(rows)
// }


 
// for (let i = 0; i < 7; i++){
//   let row =""
//   for (let j = 0; j <= i; j++){
//     row +="*"
//   }
//   console.log(row)
// }




/*for (let i = 1; i <= 5; i++){
  let row = " "
  for (let k = 0; k <= 5 - i; k++){
    row +="1"
  }

  for (j = 0; j < 2 * i - 1; j++){
    row +="-"
  }
  console.log(row)
} 



for (let i = 5; i <= 0; i--){
  let row = ""
  for (let k = 0; k <= 5-i; k++){
    row+=" "
  }
  for (j = 0; j < 2 * i - 1; j++){
    row+="-"
  }
  console.log(row)
}*/

//christmas tree

for(let i=0; i<=7 ;i++){
  let row = " "//eutai row ma print garna
  for(j=0; j<7-i; j++){
    row+=" "//agadi ko space manage garna
  }
  for (k=0; k < 2*i-1; k++ ){
    row+="*"//row print garxa
  }
  console.log(row)
}

