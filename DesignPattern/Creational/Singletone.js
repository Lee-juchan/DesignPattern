/*
    singleton pattern

    : 전체 시스템에 오직 하나의 객체만 존재하도록
        + 무거운 객체, 하나만 존재해야 하는 객체
*/

// ex1
class Singleton {
    static instance; // static 변수
    constructor() {
        if(!Singleton.instance) {
            Singleton.instance = this; // instance가 undefined이면 자신객체 할당
        }
        return Singleton.instance;
    }
}

let s1 = new Singleton();
let s2 = new Singleton();

console.log(s1 === s2); // true


// ex2
class SingleCat {
    static instance;
    constructor(name) {
        this.name = name;
        if(!SingleCat.instance) {
            SingleCat.instance = this;
        }
        return SingleCat.instance;
    }

    speak() {
        console.log(`${this.name} meow`);
    }
}

let cat1 = new SingleCat("cat1");
let cat2 = new SingleCat("cat2");

cat1.speak(); // 같은 객체 (같은 이름)
cat2.speak();

console.log(cat1 === cat2);