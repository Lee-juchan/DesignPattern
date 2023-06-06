/*
    template method pattern

    : 클래스의 메소드가 템플릿으로 정의됨
    상속+오버라이드로 다형성 구현
*/

class BasicRamenRecipe {
    cookRamen() {
        this.boilWater();
        this.addRamen();
        this.addOns();
        this.wait();
    }

    boilWater() {
        console.log("boil 550ml of water");
    }
    addRamen() {
        console.log("add noodles, soup Base flakes");
    }
    addOns() {}
    wait() {
        console.log("cook for 4m 30s");
    }
}

const basic = new BasicRamenRecipe();
basic.cookRamen();
console.log("---------");


class BaekRecipe extends BasicRamenRecipe {
    addOns() {
        console.log("add 1kg of sugger");
    }
}
const bbaek = new BaekRecipe();
bbaek.cookRamen();
console.log("---------");


class GrandmaRecipe extends BasicRamenRecipe {
    boilWater() {
        console.log("boil 1L of water");
    }
    wait() {
        console.log("cook for 1h");
    }
}
const grandma = new GrandmaRecipe();
grandma.cookRamen();