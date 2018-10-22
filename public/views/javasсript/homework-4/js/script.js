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
while (i< 3) {
  alert( "номер " + i + "!" );
  i++;
} 


// 6) вторять цикл, пока ввод неверен
do {
 var text = prompt('Введите число больше 100', '');
} while (text <= 100 && text !== null);

// 7) Вывести простые числа
for (var i = 2; i <= 10; i++) {
  var isPrime = true;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) { 
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}




