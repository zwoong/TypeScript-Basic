"use strict";
// Abstarct : 완전하지 않은
class AbstarctPerson {
    constructor() {
        this._name = 'Mark';
    }
}
// new AbstarctPerson() 완전한 클래스가 아니라 이런식으로 생성 불가
class ExtendsPerson extends AbstarctPerson {
    setName(name) {
        this._name = name;
        console.log(this._name);
    }
}
const ExP = new ExtendsPerson();
ExP.setName("Jack"); // Jack
