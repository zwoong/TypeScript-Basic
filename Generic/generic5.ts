class PersonGeneric<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new PersonGeneric("Mark", 39);

// new PersonGeneric<string, number>("Mark", "age"); error!!
new PersonGeneric<string, number>("Mark", 39);