/*
    flyweight pattern

    : 다수의 객체 속성을 공유해서 메모리 소모를 줄여줌
*/

// ex1-1
class _Dog {
    static DNA = "ATAGGCTATTCG.." // static 변수로 공유

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    repr() {
        return `${this.name}, ${this.age}, ${_Dog.DNA}`
    }
}

const dog1 = new _Dog("choco", 10);
console.log(dog1.repr());
const dog2 = new _Dog("baduk", 10);
console.log(dog2.repr());



// ex1-2 : 강아지 종과 DNA 저장
class DogBreedDNA {
    constructor(breed, DNA) {
        this.breed = breed;
        this.DNA = DNA;
    }

    repr() {
        return `${this.breed}, ${this.DNA}`
    }
}

class Dog {
    // staic variable
    static DNATable = new Map();
    // static method
    static addDNA(breed, DNA) {
        let breedDNA = new DogBreedDNA(breed, DNA);
        Dog.DNATable.set(breed, breedDNA);
    }

    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        if(!Dog.DNATable.get(this.breed)) {
            throw new Error(`${this.breed} is not in DNA Table`);
        }
    }

    repr() {
        return `${this.name}, ${this.age}, ${Dog.DNATable.get(this.breed).repr()}`
    }
}

Dog.addDNA("shihTzu", "ATGGCGATGCAT..");
Dog.addDNA("jinDo", "GGATAGCGTCGT..");

const dog3 = new Dog("popi", 5, "shihTzu");
const dog4 = new Dog("nurung", 3, "jinDo");

console.log(dog3.repr());
console.log(dog4.repr());