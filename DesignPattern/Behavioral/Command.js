/*
    command pattern

    : 명령들을 추상화해서 객체로 관리 (모아두고, 실행 등등)
*/

//ex1

class Command {
    exe() {}
}

class PrintCommand extends Command {
    constructor(str) {
        super();
        this.str = str;
    }

    exe() {
        console.log(`from print command ${this.str}`);
    }
}

const com1 = new PrintCommand("first command");
com1.exe();
const com2 = new PrintCommand("second command");
com2.exe();


// ex2

class Dog {
    sit() {
        console.log("The dog sat down");
    }
    stay() {
        console.log("THe dog is staying");
    }
}

class DogCommand extends Command {
    constructor(dog, commands) { // str list
        super();
        this.dog = dog;
        this.commands = commands
    }

    exe() {
        for(let command of this.commands) {
            if(command === "sit")
                this.dog.sit();
            else if(command === "stay")
                this.dog.stay();
        }
    }
}

const choco = new Dog();
const dogCommands = new DogCommand(choco, ["sit", "stay", "sit"]);
dogCommands.exe();
console.log("-------");

// 명령을 실행시켜주는 클래스
class Invoker {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    runCommands() {
        for(let command of this.commands) {
            command.exe();
        }
    }
}

const invoker = new Invoker();
invoker.addCommand(com1);
invoker.addCommand(dogCommands);
invoker.addCommand(com2);

invoker.runCommands();