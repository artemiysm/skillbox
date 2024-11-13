// Этап 1.  5 примеров студентов
const studentsList = [
    {
        firstName: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        birthDate: new Date(2002, 4, 12), // Май (месяцы от 0)
        startYear: 2020,
        faculty: "Физика"
    },
    {
        firstName: "Мария",
        lastName: "Петрова",
        middleName: "Сергеевна",
        birthDate: new Date(2001, 9, 22), // Октябрь
        startYear: 2019,
        faculty: "Математика"
    },
    {
        firstName: "Олег",
        lastName: "Сидоров",
        middleName: "Олегович",
        birthDate: new Date(2000, 1, 10), // Февраль
        startYear: 2018,
        faculty: "Химия"
    },
    {
        firstName: "Анна",
        lastName: "Кузнецова",
        middleName: "Васильевна",
        birthDate: new Date(1999, 6, 5), // Июль
        startYear: 2017,
        faculty: "Биология"
    },
    {
        firstName: "Дмитрий",
        lastName: "Смирнов",
        middleName: "Владимирович",
        birthDate: new Date(2003, 11, 15), // Декабрь
        startYear: 2021,
        faculty: "История"
    }
];

// Этап 2. вывод одного студента в таблицу
function getStudentItem(studentObj) {
    const row = document.createElement("tr");

    const fullName = `${studentObj.lastName} ${studentObj.firstName} ${studentObj.middleName}`;
    const age = calculateAge(studentObj.birthDate);
    const birthDateStr = `${studentObj.birthDate.toLocaleDateString()} (${age} лет)`;

    const endYear = studentObj.startYear + 4;
    const currentYear = new Date().getFullYear();
    const course = currentYear >= endYear ? "закончил" : `${currentYear - studentObj.startYear + 1} курс`;

    row.innerHTML = `
        <td>${fullName}</td>
        <td>${studentObj.faculty}</td>
        <td>${birthDateStr}</td>
        <td>${studentObj.startYear}-${endYear} (${course})</td>
    `;

    return row;
}

// вычисление возраста
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        age--;
    }
    return age;
}

// Этап 3. отрисовка всех студентов
function renderStudentsTable(studentsArray) {
    const tableBody = document.getElementById("students-table-body");
    tableBody.innerHTML = ""; // Очищаем таблицу перед добавлением новых строк
    studentsArray.forEach(student => tableBody.appendChild(getStudentItem(student)));
}

// Этап 4. Добавление студента через форму с проверкой
document.getElementById("add-student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formMessages = document.getElementById("form-messages");
    formMessages.textContent = ""; // Очищаем сообщения об ошибках

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const birthDate = new Date(document.getElementById("birthDate").value);
    const startYear = parseInt(document.getElementById("startYear").value, 10);
    const faculty = document.getElementById("faculty").value.trim();

    const currentYear = new Date().getFullYear();
    if (!firstName || !lastName || !middleName || !faculty) {
        formMessages.textContent = "Все поля обязательны для заполнения.";
        return;
    }
    if (birthDate < new Date(1900, 0, 1) || birthDate > new Date()) {
        formMessages.textContent = "Дата рождения должна быть между 01.01.1900 и текущей датой.";
        return;
    }
    if (startYear < 2000 || startYear > currentYear) {
        formMessages.textContent = "Год начала обучения должен быть между 2000 и текущим годом.";
        return;
    }

    studentsList.push({ firstName, lastName, middleName, birthDate, startYear, faculty });
    document.getElementById("add-student-form").reset();
    renderStudentsTable(studentsList);
});

// Этап 5. сортировка студентов
function sortStudents(property) {
    studentsList.sort((a, b) => {
        if (property === "birthDate" || property === "startYear") {
            return new Date(a[property]) - new Date(b[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    });
    renderStudentsTable(studentsList);
}

// сортировка на заголовки таблицы
document.getElementById("sort-name").addEventListener("click", () => sortStudents("lastName"));
document.getElementById("sort-faculty").addEventListener("click", () => sortStudents("faculty"));
document.getElementById("sort-birthdate").addEventListener("click", () => sortStudents("birthDate"));
document.getElementById("sort-year").addEventListener("click", () => sortStudents("startYear"));

// Этап 6. фильтрация студентов
function filterStudents() {
    let filteredStudents = studentsList;

    const nameFilter = document.getElementById("filterName").value.trim().toLowerCase();
    const facultyFilter = document.getElementById("filterFaculty").value.trim().toLowerCase();
    const startYearFilter = parseInt(document.getElementById("filterStartYear").value, 10);
    const endYearFilter = parseInt(document.getElementById("filterEndYear").value, 10);

    if (nameFilter) {
        filteredStudents = filteredStudents.filter(student =>
            `${student.firstName} ${student.lastName} ${student.middleName}`.toLowerCase().includes(nameFilter)
        );
    }
    if (facultyFilter) {
        filteredStudents = filteredStudents.filter(student => student.faculty.toLowerCase().includes(facultyFilter));
    }
    if (startYearFilter) {
        filteredStudents = filteredStudents.filter(student => student.startYear === startYearFilter);
    }
    if (endYearFilter) {
        filteredStudents = filteredStudents.filter(student => student.startYear + 4 === endYearFilter);
    }

    renderStudentsTable(filteredStudents);
}

// событие для фильтрации при вводе значений
document.getElementById("filterName").addEventListener("input", filterStudents);
document.getElementById("filterFaculty").addEventListener("input", filterStudents);
document.getElementById("filterStartYear").addEventListener("input", filterStudents);
document.getElementById("filterEndYear").addEventListener("input", filterStudents);


renderStudentsTable(studentsList);
