
let userName = "ирина";
let userSurname = "ИВАНОВА";


let formattedName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
let formattedSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase();


console.log("Имя:", formattedName);
console.log("Фамилия:", formattedSurname);


console.log(userName !== formattedName ? "Имя было преобразовано" : "Имя осталось без изменений");
console.log(userSurname !== formattedSurname ? "Фамилия была преобразована" : "Фамилия осталась без изменений");