'use strict';

// 1) Какое последнее значение выведет этот код? Почему?

var i = 3;

while (i) {
  alert( i-- );
}
// The last value will be "1" because we are using the postfix form for "i" and  when we'll get i=0 the loop "while" will be false.

// 2) Какие значения i выведет цикл while? Префиксный вариант

var i = 0;
while (++i < 5) alert( i );

//  the result will be from 1 till 4 because we are using prefix form for "i" when we'll let i=5 it will be false creterion for "while"

// Постфиксный вариант

var i = 0;
while (i++ < 5) alert( i );

//  the result will be from 1 till 5 because we are using postfix form for "i" when we'll let i=6 it will be false creterion for "while"

// 3) Для каждого цикла запишите, какие значения он выведет.

for (var i = 0; i < 5; i++) alert( i );
// from 0 till 4 because first condition is checking and then using i++
for (var i = 0; i < 5; ++i) alert( i );
// from 0 till 4 because first condition is checking and then using ++i
// 4) Выведите чётные числа. При помощи цикла for выведите чётные числа от 2 до 10.
for (var i=2; i<=10; i+=2) alert( i ); // Can I use this variant?
// 5) Замените for на while

for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}

var i = 0;
while (i < 3) {
  alert( "номер " + i + "!" );
  i+=;
} 

// 6) вторять цикл, пока ввод неверен
do {
 var text = prompt('Введите число больше 100', '');
} while (text <= 100 && text !== null);

// 7) Вывести простые числа
for (var i = 2; i <= 10; i+=1) {
  var isPrime = true;
  for (var j = 2; j < i; j+=1) {
    if (i % j === 0) { 
      isPrime = false;
      continue;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// 8) Напишите "if", аналогичный "switch"
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// ---------------------------------------------------------
var browser;
if (browser = 'IE') {
  console.log('О, да у вас IE!');
}
else if (browser = 'Chrome' || 'Firefox' || 'Safari' ||'Opera') {
  console.log('Да, и эти браузеры мы поддерживаем');
}
else {
  console.log('Мы надеемся, что и в вашем браузере все ок!');
}

// 9) Переписать if'ы в switch
var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
// ---------------------------------------------------------
var a = +prompt('a?', '');
switch (a) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log( '2,3' );
    break;
}

// 10) Обязателен ли "else"?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
// and
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
//  result will be same in both cases.

// 11) Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
// ----------------------------------
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
// ----------------------------------

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// 12) Функция min
function min(a,b) {
  if (a<b){
    return a;
  }
  else{
    return b;
  }
}

min(4, -7);

// 13) Функция pow(x,n)

function pow(x, n) {
  if (n !== ''+parseInt(n)){
    alert('pow ' + n + 'is not integer');
    return NaN;
  }
  if (n <= 1) {
   alert ('pow ' + n + 'not supported, enter an integer degree greater than 1');
   return NaN;
  }
  var res = x;

  for (var i = 1; i < n; i+=1) {
    res *= x;
  }
  return res;
}
var x = prompt("x?", '');
var n = prompt("n?", '');

pow(x,n);
