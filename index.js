/*
1. Создать три переменные - объекта (трех студентов).

2. У каждого студента есть имя и рост.

3. Создать еще одну переменную в которую положить результат вычисления среднего роста студентов.

4. С помощью console.log вывести поочередно для каждого студента имя и рост.

5. Затем вывести значение переменной, в которой хранится средний рост.
*/

var studentOneName = 'Danil';
var studentOneHeight = 193;
var studentTwoName = 'Anton';
var studentTwoHeight = 180;
var studentThreeName = 'Dima';
var studentThreeHeight = 188;

var getTotal = (studentOneHeight + studentTwoHeight + studentThreeHeight) / 3;

console.log('Имя: ' + studentOneName + ', рост: ' + studentOneHeight + 'см');
console.log('Имя: ' + studentTwoName + ', рост: ' + studentTwoHeight + 'см');
console.log('Имя: ' + studentThreeName + ', рост: ' + studentThreeHeight + 'см');
console.log('Средний рост студентов: ' + getTotal + 'см');
