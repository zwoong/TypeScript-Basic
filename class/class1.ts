class ClassP1 {
    name;

    // 생성자 함수
    constructor(name: string) {
        this.name = name;
    }
}

const c1 = new ClassP1("Mark");

console.log(c1); // classP1 { name: 'Mark' }
