/*
    observer pattern

    : 이벤트 발생을 감시하는 옵저버들 (polling x)
*/

class Observer {
    update() {}
}

class Cat extends Observer {
    update() {
        console.log("meow");
    }
}
class Dog extends Observer {
    update() {
        console.log("bark");
    }
}

class Owner {
    constructor() {
        this.animals = [];
    }

    register(animal) {
        this.animals.push(animal);
    }

    notify() {
        for(let animal of this.animals) {
            animal.update();
        }
    }
}

const owner = new Owner();
const cat = new Cat();
const dog = new Dog();

owner.register(cat);
owner.register(dog);

owner.notify();