'use strict';

var a = 1, b = 1, c, d;

c = ++a; console.log(c); // 2   the prefix form first of all will increase 'a' to 2, and then return 'a'

d = b++; console.log(d); // 1   //the postfix form first returns old values of 'b', and then increases 'b' to 2


c = (2+ ++a); console.log(c); // 5  first "a" was increased to 3 and then we made an addition
d = (2+ b++); console.log(d); // 4  first we made an addition then  "b" was increased to 3

console.log(a); // 3
console.log(b); // 3



//Чему будет равен x в примере ниже?

var a = 2;

var x = 1 + (a *= 2);


//x = 1 + (a=2*2)= 1+4=5
x=5;
console.log(x);




var a = 2;
var b = 4;
var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
console.log(c);
console.log(b);
//1) b=b+5  b=9 we've used combined addition operator
//2) a++ -> the postfix form first returns old values and we need to keep in mind new values
//3) a*b =2*9=18 multiply operator with two variables
//4) b = 9-(3+1-2); First we've used combined subtraction operator and than used the prefix form of decrement operator for "a" and made an arithmetic(plus and minus) operations
//5) 9-18-3+7=-5
