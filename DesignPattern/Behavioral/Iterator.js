/*
    iterator pattern

    : 여러타입 컨테이너에 공통적으로 접근하게 해줌
    자료구조(컨테이너)와 접근기능(순회)을 분리 / 접근 인터페이스 분리
*/

class Iterator { // abstract
    hasNext() { }
    nextVal() { }
}

class ArrayIterator extends Iterator {
    constructor(arrayContainer) {
        super();
        this.container = arrayContainer.container;
        this.pos = -1;
    }

    hasNext() {
        if (this.pos < this.container.length - 1)
            return true;
        return false;
    }
    nextVal() {
        if (this.hasNext()) {
            this.pos++;
            return this.container[this.pos];
        }
    }
}
class ArrayRevIterator extends Iterator {
    constructor(arrayContainer) {
        super();
        this.container = arrayContainer.container;
        this.pos = this.container.length;
    }

    hasNext() {
        if (this.pos > 0)
            return true;
        return false;
    }
    nextVal() {
        if (this.hasNext()) {
            this.pos--;
            return this.container[this.pos];
        }
    }
}

class ArrayContainer { // 컨테이너 (자료 저장구조)
    constructor() {
        this.container = [];
    }
    add(num) {
        this.container.push(num);
    }
    getIterator() {
        return new ArrayIterator(this);
    }
    getRevIterator() {
        return new ArrayRevIterator(this);
    }
}

// 출력 함수
const printByIter = function (iter) {
    while (iter.hasNext()) {
        console.log(iter.nextVal());
    }
}

const arrayContainer = new ArrayContainer();
arrayContainer.add(1);
arrayContainer.add(2);
arrayContainer.add(3);
arrayContainer.add(4);

const iterator = arrayContainer.getIterator();
printByIter(iterator);
console.log("---------");

const revIterator = arrayContainer.getRevIterator();
printByIter(revIterator);