/*
    strategy pattern
    
    : 런타임에 알고리즘 선택
*/

class Aniaml {
    speak() {}
}

class Cat extends Aniaml {
    speak() {
        console.log("meow");
    }
}
class Lion extends Aniaml {
    speak() {
        console.log("roar~");
    }
}

// 말거는 클래스
class AnimalSpeak {
    constructor() {
        this.animal = null;
    }

    setAnimal(animal) {
        this.animal = animal;
    }

    speak() {
        this.animal.speak();
    }
}


const animalSpeak = new AnimalSpeak();
animalSpeak.setAnimal(new Cat());
animalSpeak.speak();

animalSpeak.setAnimal(new Lion());
animalSpeak.speak();