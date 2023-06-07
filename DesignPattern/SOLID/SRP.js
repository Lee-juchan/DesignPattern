/*
    SRP (Single Responsibility Principle)

    : 클래스, 모듈, 함수는 하나의 책임만(Single Responsibility) 가져야한다.
*/

class Cat {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    // Cat method
    eat(food) {}
    walk() {}
    speak() {}

    /* SRP 위반 */
    // Cat 상태 출력 (Cat에 없는 기능)
    print() {
        console.log(`${this.age}, ${this.name}`);
    }

    /* SRP 준수 */
    // Cat 상태 확인 (출력은 외부에서)
    repre() {
        return `${this.age}, ${this.name}`;
    }
}

const cat = new Cat(5, "kitty");
console.log(cat.repre());