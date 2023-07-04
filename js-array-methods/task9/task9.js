let text = 'The Quick Brown Fox'
let newStr = text.split("")
newStr.forEach((elem,index) => {
 if(elem == elem.toLowerCase()){
    newStr[index] = elem.toUpperCase()
 }
 else{
    newStr[index] = elem.toLowerCase()
 }
})
console.log(newStr);
