'use strict'

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
  console.log('Don\'t know? "ECMAScript"!');
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

result (a + b < 4) ? 'Мало' : 'Много';
/*Перепишите if..else с использованием нескольких операторов '?'.*/

var message = (login === 'Вася') ? 'Привет' : 
(login === 'Директор') ? 'Здравствуйте' : 
(login === '') ? 'Нет логина' :
'';
