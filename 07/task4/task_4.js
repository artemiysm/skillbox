function createStudentsList(listArr) {
    const list = document.createElement('ul');
    list.className = 'students-list';

    listArr.forEach(student => {
        const card = document.createElement('li');
        card.className = 'card';

        const studentName = document.createElement('h2');
        studentName.textContent = student.name;

        const studentAge = document.createElement('span');
        studentAge.textContent = `Возраст: ${student.age} лет`;

        card.appendChild(studentName);
        card.appendChild(studentAge);
        list.appendChild(card);
    });

    document.body.appendChild(list);
}

let allStudents = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
];

document.getElementById('show-list-btn').addEventListener('click', () => {
    createStudentsList(allStudents);
});