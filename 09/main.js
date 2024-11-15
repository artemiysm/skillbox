//парные числа
const generateCardNumbers = (pairsCount = 8) => {
    const numbers = [];
    for (let i = 1; i <= pairsCount; i++) {
        numbers.push(i, i);
    }
    return numbers;
};

// перемешивание массива чисел
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// статуса игры
let firstCard = null;
let secondCard = null;
let isProcessing = false;

const createCardElement = (number) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.number = number;
    card.textContent = '?';
    
    // чекер клика на карточку
    card.addEventListener('click', () => {
        if (isProcessing || card.classList.contains('open') || card.classList.contains('matched')) {
            return;
        }
        
        card.classList.add('open');
        card.textContent = number;
        
        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            checkForMatch();
        }
    });
    return card;
};

// совпадение карточек
const checkForMatch = () => {
    isProcessing = true;
    const isMatch = firstCard.dataset.number === secondCard.dataset.number;

    setTimeout(() => {
        if (isMatch) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
        } else {
            firstCard.classList.remove('open');
            secondCard.classList.remove('open');
            firstCard.textContent = '?';
            secondCard.textContent = '?';
        }
        
        firstCard = null;
        secondCard = null;
        isProcessing = false;

        checkIfGameCompleted();
    }, 800);
};

// конец игры
const checkIfGameCompleted = () => {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === 16) {
        alert('Поздравляем! Вы нашли все пары!');
    }
};

// начало игры
const initializeGame = () => {
    const board = document.querySelector('.game-board');
    board.innerHTML = '';

    const numbers = shuffleArray(generateCardNumbers());
    numbers.forEach(number => {
        const card = createCardElement(number);
        board.appendChild(card);
    });
};

// рестарт
document.getElementById('restart').addEventListener('click', initializeGame);


initializeGame();
