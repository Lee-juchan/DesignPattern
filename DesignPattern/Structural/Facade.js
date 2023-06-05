/*
    facade pattern

    : 복잡한 로직을 숨기고, 간단한 인터페이스만 제공
*/

// 로켓 구성 3단
class Stage1 {
    ignite() {
        console.log("1st stage ignition");
    }
    litfOff() {
        console.log("1st stage liftOff");
    }
    eject() {
        console.log("1st stage eject");
    }
    comeBack() {
        console.log("1st stage return");
    }
}

class Stage2 {
    ignite() {
        console.log("2st stage ignition");
    }
    eject() {
        console.log("2st stage eject");
    }
}

class Capsule {
    ignite() {
        console.log("capsule ignition");
    }
    land() {
        console.log("capsule landing");
    }
}

class Rocket {
    constructor() {
        this.stage1 = new Stage1;
        this.stage2 = new Stage2;
        this.capsule = new Capsule;
    }

    // facade
    launch() {
        this.stage1.ignite();
        this.stage1.litfOff();
        this.stage1.eject();
        this.stage1.comeBack();
        this.stage2.ignite();
        this.stage2.eject();
        this.capsule.ignite();
        this.capsule.land();
    }
}

const rocket = new Rocket();
rocket.launch();