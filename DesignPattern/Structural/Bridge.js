/*
    bridge pattern

    : abstraction과 implementation 사이를 분리해서 독립적으로 만듬
*/

// ex1
class Animal {
    speak() {}
}

class Cat extends Animal {
    speak() {
        console.log("a cat");
    }
}
class Dog extends Animal {
    speak() {
        console.log("a dog");
    }
}

class Vehicle {
    constructor(animal) {
        this.animal = animal;
    }
    start() {}
}

class _Car extends Vehicle {
    start() {
        this.animal.speak();
        console.log("drives a car");
    }
}
class Boat extends Vehicle {
    start() {
        this.animal.speak();
        console.log("drives a boat");
    }
}

const catCar = new _Car(new Cat());
catCar.start();


// ex2
class Power {
    powerUp() {}
    powerDown() {}
}

class Engine extends Power {
    powerUp() {
        console.log("engine power up");
    }
    powerDown() {
        console.log("engine power down");
    }
}
class Moter extends Power {
    powerUp() {
        console.log("moter power up");
    }
    powerDown() {
        console.log("moter power down");
    }
}


class Car {
    constructor(power) {
        this.power = power;
    }

    drive() {
        this.power.powerUp();
    }
    stop() {
        this.power.powerDown();
    }
}

class SUV extends Car {
    SUVOnlyFn() {
        console.log("SUV only");
    }
}

const suv = new SUV(new Moter());
suv.drive();
suv.stop();
suv.SUVOnlyFn();