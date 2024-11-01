function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = 'card';

    const studentName = document.createElement('h2');
    studentName.textContent = student.name;

    const studentAge = document.createElement('span');
    studentAge.textContent = `Возраст: ${student.age} лет`;

    card.appendChild(studentName);
    card.appendChild(studentAge);

    document.body.appendChild(card);
}

// Пример вызова функции
const studentObj = { name: 'Игорь', age: 17 };
createStudentCard(studentObj);