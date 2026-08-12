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

const val = "I love Rainny Weather"

//output - the longest string is weather
//output - shortest string is I