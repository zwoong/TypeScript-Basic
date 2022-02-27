"use strict";
class ClassP2 {
    // age? : 나이값 데이터가 있을수도 혹은 없을수도
    constructor(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const p2 = new ClassP2(39);
const p2_1 = new ClassP2();
console.log(p2); // ClassP2 { name: 'Mark', age: 39 }
console.log(p2_1); // ClassP2 { name: 'Mark', age: 20 }
