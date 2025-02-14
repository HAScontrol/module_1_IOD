const practiceArray = Array(1,2,3,4,5);
console.log(practiceArray)

//swapping position 1 & 4
var b = practiceArray[0]; // b = 1
practiceArray[0] = practiceArray[3]; // [4,2,3,4,5]
practiceArray[3] = b; // [4,2,3,1,5]
console.log(practiceArray)

//swapping index 1 & 4
var b = practiceArray[1]; // b = 2
practiceArray[1] = practiceArray[4]; // [1,5,3,4,5]
practiceArray[4] = b; // [1,5,3,4,2]
console.log(practiceArray)

practiceArray.unshift(6)
console.log(practiceArray)

practiceArray.pop()
console.log(practiceArray)