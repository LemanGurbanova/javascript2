const numbers= [1,2,4,0];
const newnumbers= [...numbers];
numbers.forEach((elem) => {
    newnumbers.push(elem);
})
console.log(newnumbers);