interface Person2 {
    name: string;
    age?: number; // 값이 있을수도 있고 없을수도 있고
}

function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name}`)
}

hello2({name: 'Mark', age: 39});
hello2({name: 'Anna'});
