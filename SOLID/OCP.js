/*
    OCP (Open-Closed Principle)
    
    : 확장(Extension)에는 열려있고(Open), 수정(Modification)에는 닫혀있어야(Closed) 한다.
*/

// ex1

/* OCP 위배 */
class _Animal {
    constructor(type) {
        this.type = type;
    }
}

const _hey = function(animal) { // 분기로 나눔 (추가 될때마다 수정 필요)
        if(animal.type === "Cat")
            console.log("meow");
        else if(animal.type === "Dog")
            console.log("bark");
        else
            console.error("Wrong animal type");
}

const _cat = new _Animal("Cat");
const _dog = new _Animal("Dog");
// const _cow = new _Animal("Cow"); 확장하려면, hey함수를 수정해야함
_hey(_cat);
_hey(_dog);
// _hey(_cow);
console.log("------------------");



/* OCP 준수 */

// 추상 class
class Animal {
    speak() {} // 추상 method
}

// Animal class 상속
class Cat extends Animal {
    speak() {
        console.log("meow");
    }
}
class Dog extends Animal {
    speak() {
        console.log("bark");
    }
}

class Cow extends Animal { // 확장 가능
    speak() {
        console.log("moo");
    }
}
class Sheep extends Animal {
    speak() {
        console.log("meh");
    }
}

const hey = function(animal) { // Animal type을 매개변수로
    animal.speak();
}

const cat = new Cat();
const dog = new Dog();
const cow = new Cow();
const sheep = new Sheep();

hey(cat);
hey(dog);
hey(cow);
hey(sheep);