/*
    decorator pattern

    : 객체를 많은 기능이 필요할때 감싸서 꾸며줌
*/

class Animal {
    speak() {}
}

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


// decorator
class Deco {
    constructor(animal) {
        this.animal = animal;
    }
    speak() {
        this.animal.speak(); // 가진 animal의 speak 호출
    }
}

class WithSmile extends Deco {
    speak() {
        super.speak();
        console.log("Smile~");
    }
}
class WithHeart extends Deco {
    speak() {
        super.speak();
        console.log("Heart~");
    }
}

const cat = new Cat();
cat.speak();

const catSmile = new WithSmile(cat);
catSmile.speak();
const catHeart = new WithHeart(cat);
catHeart.speak();
const catSmileHeart = new WithHeart(catSmile);
catSmileHeart.speak();

const dog = new Dog();
dog.speak();
const dogHeart = new WithHeart(dog);
dogHeart.speak();
const dogHeartHeart = new WithHeart(dogHeart);
dogHeartHeart.speak();