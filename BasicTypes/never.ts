// 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.

function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLoop(): never {
    while (true) {}
}

declare const a: string | number;

if(typeof a !== 'string'){
    a;
}

