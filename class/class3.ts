class ClassP3 {
    constructor(public _name: string, public age: number) {}

    get name() {    // getter : return값이 반드시 필요
        console.log("get");
        return this._name;
    }

    set name(n: string) {   // setter
        console.log("set");
        this._name = n;
    }
}

const p3 = new ClassP3("Mark", 39);

console.log(p3.name); // get
p3.name = "woong"; // set
console.log(p3.name); //get 
