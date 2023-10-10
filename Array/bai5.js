var arr = [1, 2, 3, 5, 2, 1, 4]
var sort_arr = arr.slice().sort();
var duplicates = [];
for (var i = 0; i < arr.length; i++) {
    if (sort_arr[i + 1] == sort_arr[i]) {
        duplicates.push(sort_arr[i]);
    } else {
        if (!duplicates.includes(sort_arr[i])) {
        }
    }
}

console.log(duplicates);