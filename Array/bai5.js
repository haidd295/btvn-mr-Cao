function CommonItemsArray(array1, array2) {
    var arr = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                arr.push(array1[i]);
            }
        }
    }
    return arr; // Return the common items
}
var array1 = ["js", "sau", "sac"];
var array2 = ["js", "non"];

// Get common items of both array1, array2
var a = CommonItemsArray(array1, array2);
console.log(a);
//[ 'js' ]