# TypeScript 

![TypeScript](https://poiemaweb.com/img/typescript-logo.png)

</br>

## 기본 Type

Type | 설명 | 예제
-- | -- | --
Boolean | true/false 값을 가진다. | `let isDone: boolean = false`
Number | 모든 숫자는 부동 소수점 값이고 16진수, 10진수, 2진수, 8진수 모두 표현한다. | `let decimal: number = 6`
String | 문자열 데이터 | `let color: string ="blue"`
Array | 배열 | `let list: number[] = [1, 2, 3]`
Tuple | 튜플(값의 종류가 다른 배열 표현) | `let x: [string, number] = ["hello", 10]`
Enum | 열거형(새로운 열거형을 정의) | `enum MyStatus { sleep = '자는중'; study = '공부하는중' }; `</br> `const status: MyStatus = MyStatus.sleep;`
Any | "어떤 타입이든" | `let notSure: any = 4;` </br> `let notSure: any = "hello";`
Void | "타입이 전혀 없는(일반적으로 값을 반환하지 않는 함수의 반환 유형으로 사용)" | `function warnUser(): void { alert("This is my warning message") }`
Null | "의도적으로 null값을 할당" | `let n: null = null;`
Undefined | "아무것도 초기화(할당) 되지 않았다." | `let u: undefined = undefined;`
Never | "오류를 출력하거나 리턴 값을 내보내지 않음을 의미" | `function invalid(message:string): never { throw new Error(message) }`
Object | non-primitive 타입 | `let obj: object = { name: "woong", age: 29 }`

</br>

### primitive type(기본형 타입)
1. Boolean
2. Number
3. String
4. Array
5. Tuble
6. Enum
7. Any
8. Void
9. Null And Undefined 
10. Never

