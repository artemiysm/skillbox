let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];

function mergeArrays(arr1, arr2) {
    let result = [...arr1];  

    
    for (let i = 0; i < arr2.length; i++) {
        result[result.length] = arr2[i];
    }

    console.log(result);
}

mergeArrays(arr1, arr2);