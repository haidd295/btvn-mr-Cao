// 4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
// Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]

function unique(arr) {
    const myMap = new Map();
    for (const e of arr) {
        !myMap.has(e) ? myMap.set(e, 1) : myMap.delete(e);
    }
    return [...myMap.keys()];
}

const arr1 = [1, 2, 3, 5, 2, 1, 4];

console.log(unique(arr1));

