"use strict";
// 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== 'string') {
    a;
}
