/*
    memento pattern

    : 객체의 상태를 메멘토로 만들어 보관하고, 되돌릴 수 있도록
*/

class Cat {
    constructor(age, height) {
        this.age = age;
        this.height = height;
    }

    createMemento() {
        let catMemento = new CatMemento(this.age, this.height);
        return catMemento;
    }
    restore(memento) { // 복원
        this.age = memento.age;
        this.height = memento.height;
    }

    speak() {
        console.log(`${this.age}years old, ${this.height}cm`);
    }
}

class CatMemento {
    constructor(age, height) {
        this.createdTime = new Date().toString();
        this.age = age;
        this.height = height;
    }
}

const catHistory = [];

const cat = new Cat(0, 10);
const memento0 = cat.createMemento();
catHistory.push(memento0);

cat.age = 1;
cat.height = 20;
const memento1 = cat.createMemento();
catHistory.push(memento1);

cat.age = 2;
cat.height = 30;
const memento2 = cat.createMemento();
catHistory.push(memento2);

cat.speak();

cat.restore(catHistory[0]);
cat.speak();