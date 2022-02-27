interface Person1 {
    name: string;
    age: number;
}

function hello(person: Person1): void {
    console.log(`안녕하세요! ${person.name}(${person.age}) 입니다.`);
};

const p1: Person1 = {
    name: "Mark",
    age: 39
};

hello(p1);
// 안녕하세요! Mark(39) 입니다.