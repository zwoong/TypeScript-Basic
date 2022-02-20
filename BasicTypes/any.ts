// 어떤 타입이어도 상관없는 타입

function returnAny(message: any): any {
    console.log(message)
}

const any1 = returnAny('리턴은 아무거나');

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({num: 0});

