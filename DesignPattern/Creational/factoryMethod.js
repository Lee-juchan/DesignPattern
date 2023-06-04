/*
    factory method pattern

    : Factory 추상 클래스에서 Factory method 상속
    + factory에 추가처리를 하고 싶을 때
*/

class IAnimal { // 추상 class
    speak() {}
}

class Cat extends IAnimal { // 구현 class
    speak() {
        console.log("meow");
    }
}
class Dog extends IAnimal {
    speak() {
        console.log("bark");
    }
}


// Factory
class IFactory { // Factory interface 
    createAnimal() {}
}

class CatFactory extends IFactory { // Factory 구현
    createAniaml() {
        return new Cat();
    }
}
class DogFactory extends IFactory {
    createAniaml() {
        console.log("added dog wings"); // 추가 처리
        return new Dog();
    }
}

const catFactory = new CatFactory();
const cat = catFactory.createAniaml();
cat.speak();

const dogFactory = new DogFactory();
const dog = dogFactory.createAniaml();
dog.speak();