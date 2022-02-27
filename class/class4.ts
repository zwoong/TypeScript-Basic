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
