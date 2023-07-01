// Task 1
// Додайте код функції try catch так, щоб замість помилки в out-1 виводилася цифра 1.

function fn1() {
  let a = 22;

  let c = a + d;
}

document.querySelector(".btn-1").onclick = fn1;

// Task 2
// Додайте код функції try catch так, щоб замість помилки результат виводився в out-2.

function fn2() {
  let a = 4;
  let b = 5;

  document.querySelector(".out-2222222").innerHTML = a * b;
}

document.querySelector(".btn-2").onclick = fn2;

// Task 3
// Додайте код функції try catch так, щоб замість помилки результат виводився в out-3. Якщо елемента немає – створіть його через js
// (тобто, ви не знаєте буде чи ні він у  html).

function fn3() {
  let a = 4;
  let b = 5;

  document.querySelector(".out-3").innerHTML = a * b;
}

document.querySelector(".btn-3").onclick = fn3;

//  Task 4
// Дано змінну a. До змінної застосовується push(). Використовуючи try catch відловіть помилки, якщо вони є. Якщо помилка, тоді в out-4 вивести число 0. Якщо помилки немає – то вивести результуючий масив у вигляді рядка, роздільник між значеннями пробіл.

let a = [2, 3, 4];
// a = 5; // розкоментувавши, перевіти роботу коду

function fn4() {
  a.push(7);
}

document.querySelector(".btn-4").onclick = fn4;

//  Task 5
// Додайте try, catch, finally так, щоб в out-5 виводився 0 при помилці, а в out-5-1 завжди виводилося слово 'finnaly'

function fn5() {
  let p = document.querySelectorAll("p");

  p.push(3);
}

document.querySelector(".btn-5").onclick = fn5;
