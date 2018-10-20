'use strict';

//1 Выведется ли alert?

if ("0") {
  alert( 'Привет' );
}
// yes, because "0"-is true

//2
var value = prompt('What\'s official name of JavaScript?', '');

if (value === 'ECMAScript') {
  console.log('Right!');
} else {
  console.log('Don\'t know? ECMAScript!');
}

/*3.  Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.*/

var value = prompt('Value', '');
if (value > 0) {
  console.log(1);
} else if (value < 0) {
  console.log(-1);
} else{
  console.log(0);
}


/* 4  Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён»,
если вводит что-то другое – «Я вас не знаю».
Пароль проверять так. Если введён пароль «Чёрный Властелин»,
то выводить «Добро пожаловать!»,
иначе – «Пароль неверен»,
при отмене – «Вход отменён».*/

var userName = prompt('Кто пришёл?', '');

if (userName === 'Админ') {
  var password = prompt('Пароль?', '');
  if (password === 'Чёрный Властелин') {
    console.log( 'Добро пожаловать!' );
  } else if (password === null) { 
    console.log( 'Вход отменён' );
  } else {
    console.log( 'Пароль неверен' );
  }
} else if (userName === null) { 
  console.log( 'Вход отменён' );
} else {
  console.log( 'Я вас не знаю' );
}

/* 5 Перепишите if с использованием оператора '?':

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/ 
var a = 3;
var b = 4;
var result = (a + b < 4) ? 'Мало' : 'Много';
/*Перепишите if..else с использованием нескольких операторов '?'.*/
var login;
var message = (login === 'Вася') ? 'Привет' : 
(login === 'Директор') ? 'Здравствуйте' : 
(login === '') ? 'Нет логина' :
'';
// 6 Что выведет код ниже?

alert( null || 2 || undefined );
//result will be "2"-because it's the firsr true value;

// 7 Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );
//result will be 1 and 2 -because first "alert" displays "1" on the screen and returns "underfined" thant's why operator "or" will check next value, then operator "or" stops on value "2" (true)

// 8 Что выведет код ниже?

alert( 1 && null && 2 );
//result will be null-because it's first false value

// 9 Что выведет код ниже?

alert( 1 && null && 2 );
//result will be 1 and underfined -because first "alert" displays "1" on the screen and returns "underfined" and operator "and" will not check the next alert

// 10 Что выведет код ниже?

alert( null || 2 && 3 || 4 );
//result will be 3. because of prioritet firs was made (2 && 3)- the operator "and" checks the operands to the first "false" and returns it, and if all true - the last value, thaen we checked operators "or" and first true value was "3"

/* 11 Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

«Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90. */

var age;
if (age >= 14 && age <= 90) {
  console.log ('Right!');
}

/*  12 Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.*/

var age;
if (!(age <=14 && age <= 90)) {
  console.log ('ура');
}

/* 13 Какие из этих if верны, т.е. выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?*/

if (-1 || 0) alert( 'первое' ); //will be executed because "-1"-true
if (-1 && 0) alert( 'второе' ); // -1 && 0-false that's why "if" won't be executed
if (null || -1 && 1) alert( 'третье' ); //will be executed, because -1 && 1 will be "1" and null || 1 - "1"

// 14 Подумайте, какой результат будет у выражений ниже.

"" + 1 + 0   // '10'
"" - 1 + 0   // -1 -number
true + false // 1+0=1 number
6 / "3"  // 2 number
"2" * "3" // 6 number
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'

"4" - 2 // 2 number

"4px" - 2  // NaN

7 / 0 // Infinity

"  -9\n" + 5 
/* "-9 
5" */
"  -9\n" - 5 // -14 number
5 && 2  // 2

2 && 5 // 5

5 || 0 // 5

0 || 5 // 5
null + 1  // 1
undefined + 1 // NaN
null == "\n0\n"  // false
+null == +"\n0\n" // true
