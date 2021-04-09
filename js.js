let arr = [55,4,8,31,27,77,16,11,12,24,5,7,19]

const quickSort = function (arr) {

    // if array contain 1 or less number return function
    if (arr.length <= 1) { 
        return arr; 
    }

    // Take the middle number as pivot from array
    let pivotIndex = Math.floor(arr.length / 2);

    // arr.splice(pivotIndex,1)[0] get the pivot number
    let pivot = arr.splice(pivotIndex, 1)[0];

    // ser left and right array
    let left = [];
    let right = [];

    // start loop
    for (var i = 0; i < arr.length; i++) {

        // push the smaller number to left
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            // push the bigger number to right
            right.push(arr[i]);
        }
    }
    // repeat method to both left and right array
    return quickSort(left).concat([pivot], quickSort(right));
};

console.log(`Sort the random number: ${arr}`)
console.log(`Sort result: ${quickSort(arr)}`)

// var arr = [4,8,55,31,27,16,11]

// var pivotIndex = Math.floor(arr.length / 2);
// var pivot = arr.splice(pivotIndex, 1)[0];
// console.log(pivotIndex)
// console.log(pivot)