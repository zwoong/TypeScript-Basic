interface Iperson {
    name: string;
    age: number;
}

const i_person: Iperson = {
    name: "Mark",
    age: 39,
}

// type Keys = keyof Iperson; 어떤 객체에 그 결과물을 key에 이름으로 union type으로 만들어준다.
// const keys: Keys = "name";

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getProp(i_person, 'name'));

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

setProp(i_person, "name", "Anna");
console.log(getProp(i_person, 'name'));
