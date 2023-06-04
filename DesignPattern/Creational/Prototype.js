/*
    prototype pattern

    : 한 객체를 deep copy해서 다른 객체를 만든다.
*/

// deep copy 함수
const deepCopy = function(object) {
    if (object === null || typeof object !== "object") {
      return object;
    }
    // 객체인지 배열인지 판단
    const copy = Array.isArray(object) ? [] : {};
   
    for (let key of Object.keys(object)) {
      copy[key] = deepCopy(object[key]);
    }
   
    return copy;
}


class Cat {
    constructor() {
        this.color = null;
        this.eyeColor = null;
        this.noseColor = null;
        this.tailColor = null;
        this.name = null;
    }

    copy() {
        return deepCopy(this);
    }
}

const _kitty = new Cat();
_kitty.color = "white";
_kitty.eyeColor = "white";
_kitty.noseColor = "white";
_kitty.tailColor = "white";
_kitty.name = "kitty";

const _nabi = _kitty.copy();
_nabi.name = "nabi";

console.log(_kitty);
console.log(_nabi);


// Cat 자식 클래스
class BlackCat extends Cat {
    constructor() {
        super();
        this.color = "black";
    }
}

class WhiteCat extends Cat {
    constructor() {
        super();
        this.color = "white";
    }
}

const blackCat = new BlackCat();
blackCat.noseColor = "pink";
blackCat.tailColor = "green";

const kitty = blackCat.copy();
kitty.eyeColor = "white";
kitty.name = "kitty";

console.log(kitty);

const nabi = kitty.copy(); // 함수까지는 복사가 안된다.. ?
nabi.eyeColor = "blue";
nabi.name = "nabi";

console.log(nabi);