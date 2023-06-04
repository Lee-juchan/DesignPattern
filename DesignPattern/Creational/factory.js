/*
    Factory pattern

    : 객체 생성을 캡슐화(숨김)
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


// Factory 함수
const AnimalFactoryFn = function(animal) { // String 타입 매개변수, (enum 추천)
    if(animal === "Cat")
        return new Cat();
    else if (animal === "Dog")
        return new Dog();
}

const cat = AnimalFactoryFn("Cat");
cat.speak();


// Factory 클래스
class AniamlFactory {
    createAniaml(animal) { // String 타입 매개변수
        if(animal === "Cat")
            return new Cat();
        else if (animal === "Dog")
            return new Dog();
    }
}

const factory = new AniamlFactory();
const dog = factory.createAniaml("Dog");
dog.speak();