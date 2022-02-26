interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: 'Mark',
    gender: "male",
};

p81.gender = "female"; // error 발생!!
// readonly 프로퍼티 사용시 값 변경이 불가 
