interface Person3 {
    name: string;
    age?: number;
    [index: string]: any; 
    // 추가적으로 만들고 싶은 프로퍼티가 있을경우 사용하는 문법 - indexable type
}

function hello3(person: Person3):void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
    name: 'Mark',
    age: 39,
};

const p32: Person3 = {
    name: "Anna",
    systers: ['Sung', 'Chan'],
};

const p33: Person3 = {
    name: "Bokjdaengi",
    father: p31,
    mother: p32,
};

hello3(p33);