/* 
    builder pattern

    : 복잡한 객체생성을 간단하게
*/

class Cat {
    constructor(heigth, weight, color) {
        this.heigth = heigth;
        this.weight = weight;
        this.color = color;
    }

    // SRP 위반이지만, 편의상
    print() {
        console.log(`${this.heigth}cm, ${this.weight}kg, ${this.color}`);
    }
}

// Builder
class CatBuilder {
    constructor() {
        this.heigth = "";
        this.weight = "";
        this.color = "";
    }

    // set 함수
    setHeight(heigth) {
        this.heigth = heigth;
        return this; // 체인 형태로 생성가능
    }
    setWeight(weight) {
        this.weight = weight;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }

    // 고양이 생성함수
    build() {
        let cat = new Cat(this.heigth, this.weight, this.color);
        return cat;
    }
}

const catBuilder = new CatBuilder();
catBuilder.setHeight(30);
catBuilder.setWeight(10);
catBuilder.setColor("black");

const cat1 = catBuilder.build();
cat1.print();

const cat2 = catBuilder.setHeight(10).setWeight(5).setColor("blue").build(); // 체인 형태로 생성
cat2.print();


// builder 상속 클래스 (특정 속성 미리 부여)
class WhiteCatBuilder extends CatBuilder {
    constructor() {
        super();
        this.color = "white";
    }
}

class BlackCatBuilder extends CatBuilder {
    constructor() {
        super();
        this.color = "black";
    }
}

const blackCat = new BlackCatBuilder().setHeight(10).setWeight(20).build();
blackCat.print();

const whiteCat = new WhiteCatBuilder().setHeight(15).setWeight(25).build();
whiteCat.print();


// Director : builder를 세팅해주는 객체
class Director {
    setSmallCat(catBuilder) { // CatBuilder 객체를 매개변수로
        catBuilder.setHeight(5);
        catBuilder.setWeight(5);
    }

    setBigCat(catBuilder) {
        catBuilder.setHeight(100);
        catBuilder.setWeight(100);
    }
}

const director = new Director();
const blackCatBuilder = new BlackCatBuilder();
director.setSmallCat(blackCatBuilder);

let cat3 = blackCatBuilder.build();
cat3.print();

director.setBigCat(blackCatBuilder);
cat3 = blackCatBuilder.build();
cat3.print();