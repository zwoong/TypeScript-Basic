// 고유하고 수정 불가능한 값으로 만들어줌.

console.log(Symbol('foo') === Symbol('foo')); // false

const sym = Symbol();

const obj = {
    [sym]: "value",
};

console.log(obj[sym]) // 이와 같이 접근가능