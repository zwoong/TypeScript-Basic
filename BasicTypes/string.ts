let myName: string = 'Mark';

myName = 'Anna';

//Template String : 표현식을 넣을 수 있는 문자열
let fullName: string = 'Mark Lee';
let age: number = 39;

let sentence: string = `Hello, My name is ${ fullName }.
I'll be ${age + 1} years old next month`;

console.log(sentence)
/* Hello, My name is Mark Lee.
I'll be 40 years old next month */
