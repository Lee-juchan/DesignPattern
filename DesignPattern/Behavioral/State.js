/*
    state pattern

    : 상태가 변하고, 상태에 따라 기능이 다름
    상태를 캡슐화, if분기 없앰
    strategy 패턴과 차이점 (각 상태들 끼리 안다, 상태가 주 객체를 안다)
*/

// state 패턴 없이
class _TrafficLight {
    constructor() {
        this.state = "green";
    }

    setState(state) {
        this.state = state;
    }
    
    speak() {
        if(this.state === "green")
            console.log("green light");
        else if(this.state === "red")
            console.log("red light");
    }
    wait() {
        console.log("wait.. the light changed");
        if(this.state === "green")
            this.setState("red");
        else if(this.state === "red")
            this.setState("green");;
    }
}

const tLight = new _TrafficLight();
tLight.speak();
tLight.wait();
tLight.speak();

console.log("------------");


// state 패턴 적용
class TrafficLight {
    constructor() {
        this.state = new GreenLight();
    }

    setState(state) {
        this.state = state;
    }

    speak() {
        this.state.speak();
    }
    wait() {
        this.state.wait(this); // 자신을 인자로 입력
    }
}

class State { //state interface
    speak() {}
    wait() {}
}

class GreenLight extends State {
    speak() {
        console.log("green light");
    }
    wait(trafficLight) {
        console.log("wait.. the light changed");
        trafficLight.setState(new RedLight());
    }
}
class RedLight extends State {
    speak() {
        console.log("red light");
    }
    wait(trafficLight) {
        console.log("wait.. the light changed");
        trafficLight.setState(new GreenLight());
    }
}

const light = new TrafficLight();
light.speak();
light.wait();
light.speak();