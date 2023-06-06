/*
    mediator pattern 

    : 객체간 직접적인 커뮤니케이션 없애 의존성을 낯춤 (직접 부르지 말고, mediator를 통해 모두 통신)
    결합도를 낮춤
    객체간 상호작용을 캡슐화
*/

class Mediator {
    notify(signal) {}
}

class Appliance {} // abstract class

class Clock extends Appliance {
    setMediator(mediator) {
        this.mediator = mediator;
    }

    alarm() {
        console.log("alarm on");
        this.mediator.notify("AlarmOn");
    }
}
class Light extends Appliance {
    setMediator(mediator) {
        this.mediator = mediator;
    }

    on() {
        console.log("light on");
        this.mediator.notify("LightOn");
    }
    off() {
        console.log("light off");
        this.mediator.notify("LightOff");
    }
}
class Speaker extends Appliance {
    setMediator(mediator) {
        this.mediator = mediator;
    }

    on() {
        console.log("speaker on");
        this.mediator.notify("SpeakerOn");
    }
    off() {
        console.log("speaker off");
        this.mediator.notify("SpeakerOff");
    }
}

class HomeMediator extends Mediator {
    constructor(clock, light, speaker) {
        super();
        this.clock = clock;
        this.light = light;
        this.speaker = speaker;
    }

    notify(signal) {
        if(signal === "AlarmOn") {
            this.light.on();
            this.speaker.on();
        } else if(signal === "LightOff") {
            this.speaker.off();
        }
    }
}

const clock = new Clock();
const light = new Light();
const speaker = new Speaker();

const mediator = new HomeMediator(clock, light, speaker);
clock.setMediator(mediator);
light.setMediator(mediator);
speaker.setMediator(mediator);

clock.alarm();
light.off();