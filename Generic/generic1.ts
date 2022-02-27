function helloString(message: string): string {
    return message;
} 

function helloNumber(message: number): number {
    return message;
}
    
// 더 많은 반복된 함수들...

function test(message: any): any {
    return message;
}

console.log(test('MArk').length);
console.log(test(39).length);

function helloGeneric<T>(message: T): T {
    return message;
} 

console.log(helloGeneric('Mark').length);
// console.log(helloGeneric(39).length); error!!
console.log(helloGeneric(true));