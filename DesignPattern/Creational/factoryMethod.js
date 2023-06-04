/*
    factory method pattern

    : 추상 Factory를 상속받아 객체 생성 (주로, 객체-공장 일대일 대응) (temple method의 Factory의 )
    (factory에 추가처리 가능)
    temple method의 Factory 버전
*/

class IAnimal { // 추상 class
    speak() {} //
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