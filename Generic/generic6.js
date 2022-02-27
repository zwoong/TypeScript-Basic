"use strict";
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true); Argument of type 'boolean' is not assignable to parameter of type 'string | number'
