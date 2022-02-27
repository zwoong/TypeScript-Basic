"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들...
function test(message) {
    return message;
}
console.log(test('MArk').length);
console.log(test(39).length);
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric('Mark').length);
// console.log(helloGeneric(39).length); error!!
console.log(helloGeneric(true));
