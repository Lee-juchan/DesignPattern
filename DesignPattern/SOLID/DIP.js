/*
    DIP (Dependency Inversion Principle)

    : High level 모듈이 Low level 모듈에 의존하면 안된다. (추상 클래스, 인터페이스 의존)
*/

/* DIP 위반 */
// Low level class
// class _Cat {
//     speak() {
//         console.log("meow");
//     }
// }
// class _Dog {
//     speak() {
//         console.log("bark");
//     }
// }
// class _Cow {
//     speak() {
//         console.log("moo");
//     }
// }

// // High level class
// class _Zoo {
//     constructor() { // low level 모듈에 의존함
//         this.cat = new _Cat();
//         this.dog = new _Dog();
//         this.cow = new _Cow();
//     }
// }



/* DIP 준수 */
// 추상 class
class Aniaml {
    speak() {} // 추상 method
}

// 구현 class (Low level class)
class Cat extends Aniaml {
    speak() {
        console.log("meow");
    }
}
class Dog extends Aniaml {
    speak() {
        console.log("bark");
    }
}
class Cow extends Aniaml {
    speak() {
        console.log("moo");
    }
}

// High level class
class Zoo {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) { // Animal 추상클래스에 의존
        this.animals.push(animal);
    }

    speakAll() {
        for(let animal of this.animals) { // + for in은 key에 접근, for of는 값에 접근(iterator)
            animal.speak();
        }
    }
}

const zoo = new Zoo();
zoo.addAnimal(new Cat());
zoo.addAnimal(new Dog());
zoo.addAnimal(new Cow());


console.log(zoo.animals);

zoo.speakAll();