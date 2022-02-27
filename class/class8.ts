class Parent {
    /* 자바스크립트에서 private혹은 protected 접근제어자 프로퍼티나 메소드 앞에 _를 붙여서
       표현하는것이 관습이다. */
    constructor(protected _name: string, private _age: number) {}
    
    public print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
}

// const p = new Parent("Mark", 39);
// p.print();

class Child extends Parent {
    gender = 'male';    

    constructor(age: number){
        super('Mark Jr.', age)        
    }
}

const child = new Child(5);

child.print(); // 이름은 Mark 이고, 나이는 39 입니다.