"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녀하세요! ${this.name} 입니다.`);
    }
}
const person5 = new Person("Mark");
person5.hello();
