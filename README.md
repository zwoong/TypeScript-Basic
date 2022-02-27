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

</br>

### what is class?

``` 
객체를 만드는 청사진, 설계도
class 이전에는 function을 이용해 객체를 생성
```

</br>

### class 만드는 법

```ts
class ClassP1 {
    name;

    // 생성자 함수
    constructor(name: string) {
        this.name = name;
    }
}

const c1 = new ClassP1("Mark");

console.log(c1); // classP1 { name: 'Mark' }
```
</br>

### 데이터가 있을지 혹은 없을지 모를떄

```ts
class ClassP2 {
    name: string = "Mark";
    age: number; 

    // age? : 나이값 데이터가 있을수도 혹은 없을수도
    constructor(age?: number) {
        if(age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }
    }
}

const p2 = new ClassP2(39);
const p3 = new ClassP2();

console.log(p2); // ClassP2 { name: 'Mark', age: 39 }
console.log(p3); // ClassP2 { name: 'Mark', age: 20 }
```

</br>

### 접근제어자

접근제어자 | 설명  
-- | -- 
public | 외부에서 접근 가능
private | 클래스 내부에서만 접근 가능
protected | 외부에서는 접근 불가, 상속관계에서는 접근이 가능

</br>

### getter, setter

```ts
class ClassP3 {
    constructor(public _name: string, public age: number) {}

    get name() {    // getter : return값이 반드시 필요
        console.log("get");
        return this._name;
    }

    set name(n: string) {   // setter
        console.log("set");
        this._name = n;
    }
}

const p3 = new ClassP3("Mark", 39);

console.log(p3.name); // get
p3.name = "woong"; // set
console.log(p3.name); //get 
```

</br>

### class readonly
readonly 프로퍼티 사용시 초기값 설정 할떄 혹은 </br>
생성자 함수를 사용해서만 데이터 변경이 가능하다,

```ts
class ClassP4 {
    readonly name: string = "Mark";
    readonly country: string;

    constructor(name: string, age: number) {
        this.country = "Korea";
    }

    hello() {
        // this.country = "japan"; error!!
    }
}
```

</br>

### class indexable

```ts
// class => object
// {mark: 'male', jade: 'male'} => s반
// {chloe: 'female', alex: 'male', anna: 'female'} => s1반


// indexable : 프로퍼티가 고정된 경우가 아니라 동적으로 프로퍼티가 생성되어야 할떄 사용 
class Students {
    [index: string]: "male" | "female" ;
}

const s = new Students();
s.mark = "male";
s.jade = "male";

const s1 = new Students(); 
s1.chloe = "female";
s1.alex = "male";
s1.anna = "female";

console.log(s);
console.log(s1);
```

</br>

### class static

```ts
class Class6 {
    public static CITY = "Seoul";

    static hello() {
        console.log("안녛하세요");
    }
}
/* static : class를 통한 별도의 인스턴스나 객체를 생성하지 않고도, 
바로 class 내부의 함수 및 인자를 사용할 수 있는 방법 */

const p6 = new Class6();
// p6.hello(); // 원래는 이와같이 사용하는데  static이 붙을경우 error

Class6.hello();
Class6.CITY;
```

</br>

### Singletone Pattern

```ts
// Singletone Pattern : 클래스가 단 하나의 인스턴스만 갖도록 보장한다.
class ClassName {
    private static instance: ClassName | null = null;
    public static getInstance(): ClassName {
        // ClassName 으로부터 만든 object가 없으면, 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }

    private constructor() {

    }
}

const CN = ClassName.getInstance();
const CN1 = ClassName.getInstance();

/* 원래는 2개의 별개의 객체를 생성했기떄문에 false가 나오는게 맞지만
싱글톤 패턴이라 2개의 객체는 돌일한 메모리주소를 바라보기떄문에 true가 출력된다. */
console.log(CN === CN1); // true
```

</br>

### class 상속
```ts
class Parent {
    /* 자바스크립트에서 private혹은 protected 접근제어자 프로퍼티나 메소드 앞에 _를 붙여서
       표현하는것이 관습이다. */
    constructor(protected _name: string, private _age: number) {}
    
    public print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
}

// const p = new Parent("Mark", 39);
// p.print();

class Child extends Parent {
    gender = 'male';    

    constructor(age: number){
        super('Mark Jr.', age)        
    }
}

const child = new Child(5);

child.print(); // 이름은 Mark 이고, 나이는 39 입니다.
```

</br>

### Abstract 
```ts
// Abstarct : 완전하지 않은

abstract class AbstarctPerson {
    protected _name: string = 'Mark';

    abstract setName(name: string): void;
}

// new AbstarctPerson() 완전한 클래스가 아니라 NEW로 생성 불가

class ExtendsPerson extends AbstarctPerson {
    setName(name: string): void {
        this._name = name;
        console.log(this._name);
    }
}

const ExP = new ExtendsPerson();

ExP.setName("Jack"); // Jack
```