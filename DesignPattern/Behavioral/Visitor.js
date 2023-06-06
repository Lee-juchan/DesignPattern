/*
    visitor pattern

    : 객체와 알고리즘(visitor)을 분리해서, 기존 객체 수정없이 알고리즘(operation) 추가
    visit
*/

// ex 1
class _Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log("meow");
    }

    accept(visitor) { //Visitor type
        visitor.visit(this);
    }
}

class Visitor { // abstract
    visit(elem) {} //Cat type
}

class _NameVisitor extends Visitor {
    visit(elem) {
        console.log(elem.name);
    }
}
class AgeVisitor extends Visitor {
    visit(elem) {
        console.log(elem.age);
    }
}

const _cat = new _Cat("kitty", 3);
const nameVisitor = new _NameVisitor();
_cat.accept(nameVisitor);

const ageVisitor = new AgeVisitor();
_cat.accept(ageVisitor);


// ex2
class AnimalVisitor { // visitor 
    catVisit(elem) {}
    dogVisit(elem) {}
}

class SpeakVisitor extends AnimalVisitor {
    catVisit(elem) {
        console.log("meow");
    }
    dogVisit(elem) {
        console.log("bark");
    }
}
class NameVisitor extends AnimalVisitor {
    catVisit(elem) {
        console.log(`cat, ${elem.name}`);
    }
    dogVisit(elem) {
        console.log(`dog, ${elem.name}`);
    }
}

class Animal { // 대상 객체
    constructor(name) {
        this.name = name;
    }
    accept(visitor) {}
}

class Cat extends Animal {
    accept(visitor) {
        visitor.catVisit(this);
    }
}
class Dog extends Animal {
    accept(visitor) {
        visitor.dogVisit(this);
    }
}

const dog = new Dog("choco");
const cat = new Cat("kitty");
const name = new NameVisitor();
const speak = new SpeakVisitor();

dog.accept(speak);
cat.accept(speak);
dog.accept(name);
cat.accept(name);