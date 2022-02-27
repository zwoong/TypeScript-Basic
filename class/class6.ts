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

