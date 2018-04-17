let theNum = []
function returnNumber() {
    var numTh = Math.random() * 10;
    theNum.push(Math.round(numTh))
    if (theNum.length < 10) {
        return returnNumber()
    } else {
        return theNum
    }
}
// returnNumber();
let newInde = []

function getIndecies (){

let theArray = returnNumber();
theArray.sort()
for (let index = 0; index < theArray.length; index++) {
    const element = theArray[index];
    // console.log(element.toString());
    if (theArray.length > 5) {
        theArray.pop()
   }
}
}
getIndecies()

// console.log(theNum)
// theNum.sort(function (a, b) {
//     return a-b
// })
console.log(theNum)
console.log(newInde);
