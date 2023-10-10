// I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
// Write a function with 1 input parameter, an return a new object like this:
// {'face': 2, 'zalo': 3, 'gmail':1} // 2,3,1 are the number of occurrences of 'face', 'zalo', 'gmail' in the array

// Example: 		const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
//         const myFunc = (inputArr) => {
//             //write somthing here
//         }
//         console.log(myFunc(myArr)) // {'face': 2, 'zalo': 3, 'gmail':1}

const arr = [6, 7, 8, 9, 9, 9];

const count = {};

for (const element of arr) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}

console.log(count); //{ '6': 1, '7': 1, '8': 1, '9': 3 }
