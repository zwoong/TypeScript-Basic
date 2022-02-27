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

console.log(CN === CN1); // true