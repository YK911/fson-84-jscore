import users from "./db.js";
/**
  |============================
  | Завдання 1 +++
  |============================
*/
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// function getUserNames(users) {

//   const userName = users.map(user => user.name);
//   return userName;
// }

// //const getUserNames = (users) => users.map(user => user.name);

// console.log(getUserNames(users))


/**
  |============================
  | Завдання 2 +++
  |============================
*/
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
//++++++++++++++++++ Рішення ++++++++++++++++++

// // function getUsersWithEyeColor(users, color) {
// //   const userEyesColor = users.filter(user => user.eyeColor === color);
// //   return userEyesColor;
// // }

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'))

/**
  |============================
  | Завдання 3 +++
  |============================
*/
// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// function getUsersWithGender(users, gender) {
//   const userGender = users.filter(user => user.gender === gender);
//   return userGender;
// }

// const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender);


// console.log(getUsersWithGender(users, 'male'))
/**
  |============================
  | Завдання 4  +++
  |============================
*/
// Отримати масив тільки неактивних користувачів (поле є активним).
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const getInactiveUsers = (users) => users.filter(user => !user.isActive);
// console.table(getInactiveUsers(users))

/**
  |============================
  | Завдання 5 +++
  |============================
*/
// Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
//++++++++++++++++++ Рішення ++++++++++++++++++

// function getUserWithEmail(users, email) {
//   const userEmail = users.find(users => users.email === email);
//   return userEmail.name;
// }
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'))
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'))

/**
  |============================
  | Завдання 6  +++
  |============================
*/
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge(users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
//++++++++++++++++++ Рішення ++++++++++++++++++

// function getUsersWithAge(user, min, max) {
//   const usersAge = users.filter(user => user.age >= min && user.age <= max);
//   return usersAge;
// }

// console.log (getUsersWithAge(users, 20, 30))
// console.log (getUsersWithAge(users, 30, 40))

/**
  |============================
  | Завдання 7  +++
  |============================
*/
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916
//++++++++++++++++++ Рішення ++++++++++++++++++

// function calculateTotalBalance(users){
//   let totalBalance = 0;
//   const usersBalance = users.map(user => totalBalance += user.balance);
//   return totalBalance;
// }
// console.log(calculateTotalBalance(users))

/**
  |============================
  | Завдання 8  +++
  |============================
*/
// Отримати масив імен всіх користувачів, які мають одиного друга із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// function getUsersWithFriend(users, friend) {
//   const usersFriend = users.filter(user => user.friends.includes(friend))
//   .map(user => user.name);

//   return usersFriend;
// }

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

/**
  |============================
  | Завдання 9  +++
  |============================
*/
// Отримати масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)
// console.log(getNamesSortedByFriendCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// function getNamesSortedByFriendCount(users) {
//   const sortedByFruends = [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length).map(user => user.name);
//   return sortedByFruends;
// }
// console.log(getNamesSortedByFriendCount(users));
// console.log(users);
// console.log(sortedByFruends);

/**
  |============================
  | Завдання 10  +++
  |============================
*/
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// уміннь, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
//++++++++++++++++++ Рішення ++++++++++++++++++

// function getAllUsersSkills(users){
//   const usersSkills = users.flatMap(user => user.skills)
//   .filter((user, index, array) => array.indexOf(user) === index)
//   .sort((a, b) => a.localeCompare(b));

// return usersSkills;
// }
// console.log(getAllUsersSkills(users));

/**
  |============================
  | Завдання 11 +++
  |============================
*/
// Напишіть функцію compact(), яка очищає масив від небажаних значень,
// таких як false, undefined, порожні рядки, нуль, null.
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data)); // [1, 2, 3]
//++++++++++++++++++ Рішення ++++++++++++++++++

// function compact(data) {
//   const comp = [0, 1, false, 2, undefined, "", 3, null];
//   const result = data.filter(element => element );
//   return result;

// }
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data));

/**
  |============================
  | Завдання 12  +++
  |============================
*/
// Напишіть функцію without(), яка повертає новий масив без наданих значень. Використовуйте примітивні типи.
// const data = [1, 2, 3, 4, 1, 2];
// console.log(without(data, 1, 2)); // [3, 4]
//++++++++++++++++++ Рішення ++++++++++++++++++

// function without(data, a, b) {
//   const result = data.filter(element => element !== a && element !== b);

//   return result;
// }
// const data = [1, 2, 3, 4, 1, 2];
// console.log(without(data, 1, 2));

/**
  |============================
  | Завдання 13  +++
  |============================
*/
// Необхідно написати функцію isEqualSymbols(), що приймає в аргументах два рядки
// і повертає true, якщо ці рядки складаються з ідентичних літер і false в іншому випадку.
// console.log(isEqualSymbols("GOOD", "GODO")); // результат true
// console.log(isEqualSymbols("кіт", "струм")); // результат false
// console.log(isEqualSymbols("кіт", "тік")); // результат true
//++++++++++++++++++ Рішення ++++++++++++++++++

// function isEqualSymbols(str1, str2) {

// const result = [...str2].every((elem) => str1.includes(elem));

// return result;
// }

// console.log(isEqualSymbols("GOOD", "GODO"));
// console.log(isEqualSymbols("кіт", "струм"));
// console.log(isEqualSymbols("кіт", "тік"));

/**
  |============================
  | Завдання 14  +++
  |============================
*/
// Сортування примітивів.
// Виконайте сортування масиву цін за спаданням та зростанням
const prices = [1000, 240, 670, 360, 89, 20];
//++++++++++++++++++ Рішення ++++++++++++++++++

// const result = [...prices].sort((a, b) => a - b );
// console.log(result);

/**
  |============================
  | Завдання 15 +++
  |============================
*/
// Сортування рядків.
// Виконайте сортування масиву назв моніторів у алфавітному та зворотньому порядку.
const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ASER"];
//++++++++++++++++++ Рішення ++++++++++++++++++

// const ascendingResult = [...monitors].sort((firstEl, secondEl) => firstEl.localeCompare(secondEl));

// const descendingResult = [...monitors].sort((firstEl, secondEl) => secondEl.localeCompare(firstEl));

// console.log(ascendingResult);
// console.log(descendingResult);

/**
  |============================
  | Завдання 16 +++
  |============================
*/
// Сортування складних типів
// Виконайте сортування масиву об'єктів:
// 1. За зростанням та зменшенням значення властивості price
// 2. За ім'ям в алфавітному та зворотному порядку
const items = [
  { name: "SAMSUNG", price: 15000 },
  { name: "LG", price: 9000 },
  { name: "DELL", price: 27000 },
  { name: "BENQ", price: 12000 },
  { name: "ASER", price: 7000 },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

// const ascendingPrice = [...items].sort((firstEl, secondEl) => firstEl.price - secondEl.price);

// const descendingPrice = [...items].sort((firstEl, secondEl) => secondEl.price - firstEl.price);

// const ascendingName = [...items].sort((firstEl, secondEl) => firstEl.name.localeCompare(secondEl.name));

// const descendingName = [...items].sort((firstEl, secondEl) => secondEl.name.localeCompare(firstEl.name));

// console.table(ascendingPrice);
// console.table(descendingPrice);
// console.table(ascendingName);
// console.table(descendingName);

/**
  |============================
  | Завдання 17 +++
  |============================
*/
// Зібрати в allTopics масив всіх предметів всіх курсів
// Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: ["VSCode", "NPM", "Bundlers", "Transpiling", "Git", "Promises", "AJAX", "GitHub"],
  },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

// const allTopics = courses.flatMap(course => course.topics).filter((element, index, array) => array.indexOf(element) === index);

// console.log(allTopics);

/**
  |============================
  | Завдання 18
  |============================
*/
// Призначити знижку 20% на фрукти в масиві,
// Присвоїти ID для кожного продукту

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 19
  |============================
*/
// Повернути об'єкт у якому вказується кількість тегів
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 20
  |============================
*/
// Дізнатись суму років практики в об'єкті workers
const workers = [
  { id: 10, name: "Mango", years: 14 },
  { id: 2, name: "Poly", years: 19 },
  { id: 41, name: "Ajax", years: 30 },
  { id: 99, name: "Kiwi", years: 22 },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 21
  |============================
*/
// Даний масив із числами. Залишіть у ньому лише додатні числа.
// Потім порахуйте квадратний корінь цих чисел.
const array = [121, -2, 225, 0, 4, -5, 36, -11];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 22
  |============================
*/
// Створення масиву значень Фаренгейта із масиву значень Цельсія
// Для обрахунку використайте формулу <temperature * 1.8 + 32>
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 23
  |============================
*/
// Знайти унікальні елементи за допомогою reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
//++++++++++++++++++ Рішення ++++++++++++++++++
