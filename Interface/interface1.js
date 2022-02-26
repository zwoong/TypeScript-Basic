"use strict";
function hello(person) {
    console.log(`안녕하세요! ${person.name}(${person.age}) 입니다.`);
}
const p1 = {
    name: "Mark",
    age: 39
};
hello(p1);
// 안녕하세요! Mark(39) 입니다.
