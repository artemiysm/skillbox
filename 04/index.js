function generateRandomArray(count, n, m) {
    let array = [];
    let min = n < m ? n : m;
    let max = n > m ? n : m;

    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNum);
    }

    console.log(array);
}

generateRandomArray(100, 0, 100);
generateRandomArray(50, 2, 5);
generateRandomArray(70, 100, -5);
generateRandomArray(42, -3, -10);