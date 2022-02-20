declare const maybe: unknown;

// 타입 가드
if(typeof maybe === 'number'){
    const aNumber: number = maybe;
}

if(maybe === true){
    const aboolean: boolean = maybe;
}

if(typeof maybe === 'string'){
    const aString: string = maybe;
}