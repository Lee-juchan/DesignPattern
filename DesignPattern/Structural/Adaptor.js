/*
    adoptor pattern

    : 다른 인터페이스로 전환하기 위한 wrapper
*/

class Animal { // abstract class
    walk() {}
}

class Cat extends Animal { // implement
    walk() {
        console.log("cat walking");
    }
}
class Dog extends Animal {
    walk() {
        console.log("dog walking");
    }
}

// 클라이언트 함수
const makeWalk = function(animal) { // Animal 타입을 매개변수로
    animal.walk();
}

const cat = new Cat();
const dog = new Dog();
makeWalk(cat);
makeWalk(dog);


// 인터페이스가 다른 외부 클래스
class Fish {
    swim() {
        console.log("fish swimming");
    }
}

class FishAdopter extends Animal {
    constructor(fish) { // Fish 타입을 매개변수로 받음
        /*this를 사용하기 전에 super생성자를 불러야 함*/
        super();
        this.fish = fish;
    }

    walk() { // Animal과 같은 인터페이스
        this.fish.swim(); // fish 클래스 함수와 연결
    }
}

const fish = new Fish();
const fishAdopter = new FishAdopter(fish);

// makeWalk(fish); 실행 불가
makeWalk(fishAdopter); // 실행