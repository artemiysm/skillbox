function shuffleArray(count) {
    
    let array = [];
    for (let i = 1; i <= count; i++) {
        array.push(i);
    }

    
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    console.log(array);
}

shuffleArray(5);
shuffleArray(7);
shuffleArray(3);