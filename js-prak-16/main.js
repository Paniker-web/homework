// const number = prompt("Введите число для проверки: ");

// if (number % 2 === 0) {
//   console.log(`${number} является чётным числом`);
// } else {
//   console.log(`${number} является нечётным числом`);
// }

// let age = 18;
// const discount = age < 18 ? 10 : age >= 18 && age <= 65 ? 20 : 30;
// console.log(`Скидка будет ${discount}%`);

// const age = prompt("Введите свой возраст");
// let discount

// switch (true) {
//     case (age < 18):
//         discount = 10;
//         break;
//     case (age >= 18 && age <= 65):
//         discount = 20;
//         break;
//     default:
//         discount = 30;
//         break;
// }

// console.log(`Скидка будет ${discount}%`);



// let username = prompt("введите имя пользователя");
// let password = prompt("введите пороль пользователя");

// if ((username == "admin" || username == "user") && password == 123456 ){
//     console.log("Доступ разрешен")
// } else {
//     console.log("Доступ запрещен")
// }



const weight = +prompt("Введите вес посылки:");

if (weight <= 0 || isNaN(weight)) {
  alert("Некорректный вес посылки");
} else {
  const delivery = prompt(
    "Введите тип доставки:",
  );

  const base = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
  let coefficient = 0;

  switch (delivery) {
    case "Стандарт":
      coefficient = 1;
      break;
    case "Экспресс":
      coefficient = 1.5;
      break;
    case "Премиум":
      coefficient = 2;
      break;
    default:
      alert("Неверный тип доставки");
      coefficient = 0;
  }

  if (coefficient !== 0) {
    const final = base * coefficient;
    alert(`Стоимость доставки: ${final}$`);
  }
}
