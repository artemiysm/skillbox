function findIndex(array, n) {
    let index = -1;  

    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            index = i;
            break;  
        }
    }

    if (index !== -1) {
        console.log(`Индекс элемента ${n} = ${index}`);
    } else {
        console.log(`Элемент ${n} не найден`);
    }
}

let array = [2, 5, 1, 3, 4];
findIndex(array, 3); 
findIndex(array, 2); 