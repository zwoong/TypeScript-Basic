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

</br>

### what is interface?
```
인터페이스 : 상호 간에 정의한 약속 혹은 규칙
```
</br>

### 기본 사용법
```ts
interface Person {
    name: string;
    age: number;
}

function hello(person: Person): void {
    console.log(`안녕하세요! ${person.name}(${person.age}) 입니다.`);
}

const p1: Person = {
    name: "Mark",
    age: 39
}

hello(p1);

// 안녕하세요! Mark(39) 입니다.
```

</br>

### 값의 유무에따른 인터페이스 지정

```ts
interface Person2 {
name: string;
age?: number; // 값이 있을수도 있고 없을수도 있고
}

function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name}`)
}

hello2({name: 'Mark', age: 39});
hello2({name: 'Anna'});
```

</br>

### indexable type

```ts
interface Person3 {
    name: string;
    age?: number;
    [index: string]: any; 

    // 추가적으로 만들고 싶은 프로퍼티가 있을경우 사용하는 문법 - indexable type
}

function hello3(person: Person3):void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
    name: 'Mark',
    age: 39,
};

const p32: Person3 = {
    name: "Anna",
    systers: ['Sung', 'Chan'],
};

const p33: Person3 = {
    name: "Bokjdaengi",
    father: p31,
    mother: p32,
};

hello3(p33);
```

</br>

### 인터페이스 함수설정 방법

```ts
interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'Mark',
    age: 39,
    hello: function(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};

const p42: Person4 = {
    name: 'Mark',
    age: 39,
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};
```

</br>

### 인터페이스끼리 상속하기

```ts
interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: string;
}

const K: IKorean = {
    name: '최지웅',
    city: '서울',
};

/* 프로젝트에 규모가 클수록 위와같은 상속방식이
자주 사용된다. */ 
```

</br>

### 인터페이스 readonly

```ts
interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: 'Mark',
    gender: "male",
};

p81.gender = "female";  // error 발생!!
// readonly 프로퍼티 사용시 값 변경이 불가 
```