interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson1 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녀하세요! ${this.name} 입니다.`)
    }
}

const person5 = new Person("Mark");
person5.hello();