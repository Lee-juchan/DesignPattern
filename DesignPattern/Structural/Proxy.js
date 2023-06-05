/*
    proxy pattern

    : 객체를 직접 사용하지 않고, 같은 인터페이스를 가진 프록시를 대신 사용
*/

class Animal { // interface
    speak() {}
}

class Cat extends Animal {
    speak() {
        console.log("meow");
    }
}

class CatProxy extends Aniaml { // Cat을 상속받아도 됨!
    constructor(cat) { // Cat type parameter
        this.cat = cat;
    }

    speak() {
        console.log("before speak");
        this.cat.speak();
        console.log("after speak");
    }
}

const cat = new Cat();
cat.speak();

const catProxy = new CatProxy(cat);
catProxy.speak();