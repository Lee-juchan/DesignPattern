/*
    composite pattern

    : 객체와 객체의 그룹이 같은 타입으로 취급되는것
    트리구조로 구성 가능
*/

// ex1
class Component { //abstract class
    fn() {}
}

class Leaf extends Component { // child
    fn() {
        console.log("Leaf");
    }
}
class Composite extends Component {
    constructor() {
        super();
        this.components = [];
    }

    add(component) {
        this.components.push(component);
    }

    fn() {
        console.log("Composite");
        for(let component of this.components) {
            component.fn();
        }
    }
}

const com1 = new Composite();
com1.add(new Leaf());
com1.add(new Leaf());

const com0 = new Composite();
com0.add(new Leaf());
com0.add(com1);

com0.fn(); // 모든 트리로 함수 점화
console.log("--------");


// ex2

class Animal { // component
    speak() {}
}

class Cat extends Animal { // leaf
    speak() {
        console.log("meow");
    }
}
class Dog extends Animal {
    speak() {
        console.log("bark");
    }
}

class AnimalGroup extends Animal { // composite
    constructor() {
        super();
        this.animals = [];
    }

    add(animal) {
        this.animals.push(animal);
    }

    speak() {
        console.log("animals~~");
        for(let animal of this.animals) {
            animal.speak();
        }
    }
}

const catGroup = new AnimalGroup();
catGroup.add(new Cat());
catGroup.add(new Cat());
catGroup.add(new Cat());

const dogGroup = new AnimalGroup();
dogGroup.add(new Dog());
dogGroup.add(new Dog());

const groups = new AnimalGroup();
groups.add(catGroup);
groups.add(dogGroup);

groups.speak();