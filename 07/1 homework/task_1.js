function createStudentCard(name, age) {
    const card = document.createElement('div');
    card.className = 'card';

    const studentName = document.createElement('h2');
    studentName.textContent = name;

    const studentAge = document.createElement('span');
    studentAge.textContent = `Возраст: ${age} лет`;

    card.appendChild(studentName);
    card.appendChild(studentAge);

    document.body.appendChild(card);
}

// Пример вызова функции
createStudentCard('Игорь', 17);