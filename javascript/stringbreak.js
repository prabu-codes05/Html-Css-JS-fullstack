const names = "Biajy Chaudahry"

const cc = names.split(" ")
const firstname = cc[0].at(0)
console.log(firstname)

const str = "Pra besh"
console.log(str.split(""))


const sentence = "I love Spider man very Much"
const tukriyo = sentence.split(" ")
const firstLetter = tukriyo.map((val,idx)=>{
  return val[0].toUpperCase()
})
console.log(firstLetter)

/* given const val = "I love Rainny Weather" take out below outputs*/

//output - the longest string is weather
//output - shortest string is I




const val =[24,53,26,7,77,28,22];
let highest = val[0];
let smallest = val[0];
for (const num of val){
  if(num>highest){
    highest = num;
  }
  if(num<smallest){
    smallest = num;
  }
}
console.log("the highest number is:",highest);
console.log("the smallest number is:",smallest);


/*const str = "javascript is love";

// split("") makes an array, reduce() adds each letter to the FRONT 
const gimu = str.split("").reduce((accum, letter) => letter + accum, "");

console.log(gimu); */
