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