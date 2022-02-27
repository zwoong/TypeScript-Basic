"use strict";
class ClassP3 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log("get");
        return this._name;
    }
    set name(n) {
        console.log("set");
        this._name = n;
    }
}
const p3 = new ClassP3("Mark", 39);
console.log(p3.name); // get
p3.name = "woong"; // set
console.log(p3.name); //get 
