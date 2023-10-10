const array1 = [1, 4, 1, 1, 5, 9, 2, 7, 1];
const array2 = [1, 8, 2, 5, 1]

function arraysCommon(array1, array2) {
    const ans = [];
    array1.sort();
    array2.sort();
    let j = 0;
    let i = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] === array2[j]) {
            ans.push(array1[i]);
            i++;
            j++;
        }
        else {
            j++;
        }
    }
    console.log(ans);
}

arraysCommon(array1, array2);
console.log(array1.length);