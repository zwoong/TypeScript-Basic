"use strict";
class PersonGeneric {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new PersonGeneric("Mark", 39);
// new PersonGeneric<string, number>("Mark", "age"); error!!
new PersonGeneric("Mark", 39);
