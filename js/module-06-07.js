//TODO:==============================================
/*
Завдання 1
При натисканні на кнопку "Show me" в консоль має виводити значення
з поля введення (дивіться на елементи в html-розмітці)
*/

// const buttonEl = document.querySelector("#alertButton");

// // console.log(buttonEl);

// buttonEl.addEventListener('click', () => {
//     // console.log('heare');
//     // const imputValue = document.querySelector("#alertInput").value;
//     // console.log(imputValue)
//     console.log(buttonEl.nextElementSibling)
// })

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "Swap me" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const buttonEl = document.querySelector("#swapButton");

// buttonEl.addEventListener('click', () => {
//     const firstInput = document.querySelector("#leftSwapInput");
//     const secondInput = document.querySelector("#rightSwapInput");
//     let temp = firstInput.value;
//     firstInput.value = secondInput.value;
//     secondInput.value = temp;

// })
//TODO:==============================================
/*
Завдання 3
Кнопка "Hide" ховає текст і замінює назву кнопки на
"Show", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const buttonEl = document.querySelector("#passwordButton");

// buttonEl.addEventListener('click', () => {
//     const inputEl = document.querySelector("#passwordInput");
    
//     const typeEl = inputEl.getAttribute('type')
//     const toggleType = typeEl === 'password' ? 'text' : 'password';
//     inputEl.setAttribute("type", toggleType);
   
//     event.target.textContent = typeEl === "password" ? "Приховати" : "Розкрити";
//     // buttonEl.textContent = typeEl === "password" ? "Приховати" : "Розкрити";

// })

//TODO:==============================================
/*
Завдання 4
Кнопка "Decrease" робить квадрат менше на 10 пікселів, кнопка "Increase" - більше на 10 пікселів. Використай інструкцію switch
*/
// const btnDecrEl = document.querySelector("#decrease");
// const btnIncrEl = document.querySelector("#increase");
// const boxEl = document.querySelector("#box");

// btnDecr.addEventListener('click', () => {
//     const width = boxEl.offsetWidth;
//     const height = boxEl.offsetHeight;
//     boxEl.style.width = `${width - 10}px`;
//     boxEl.style.height = `${height - 10}px`;
//  });
// btnDecr.addEventListener('click', () => {
//      const width = boxEl.offsetWidth;
//      const height = boxEl.offsetHeight;
//      boxEl.style.width = `${width + 10}px`;
//      boxEl.style.height = `${height + 10}px`;
// });



//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку до сторінки і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
В консоль виводь наступну повідомлення:
1. 'Клік відбувся всередині елемента з id "place".'
2. "Клік відбувся поза зоною елемента js."
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

//TODO:==============================================
const placeEl = document.querySelector()

window.addEventListener('click', (event) => {
    
})


/*
Завдання 6
Натиснувши кнопку "Double", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При кліку на коло воно повинно слідувати за курсором.
При повторному подвійному кліку воно стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Show result" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення на
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

//TODO:==============================================
/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey
*/

//TODO:==============================================
/*
Завдання 15
Створіть HTML сторінку з табличкою,
яка містить список продуктів.Кожен рядок у
табличці повинен містити назву продукту та його ціну.
При натисканні на будь-який рядок у табличці відобразіть
повідомлення з назвою продукту та його ціною.
*/

//TODO:==============================================
/*
Завдання 16
 Створіть HTML сторінку з формою,
 яка містить поле введення для введення
 імені користувача та кнопку. При натисканні
 на кнопку відобразіть повідомлення з привітанням з іменем користувача.
*/
