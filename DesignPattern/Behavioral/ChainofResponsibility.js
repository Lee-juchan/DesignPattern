/*
    chain of responsibility pattern

    : 모듈들의 체인을 가짐
    함수와 포인터를 가진 Handler
*/

class Handler {
    constructor() {
        this.nextHandler = null;
    }
    // 다음 핸들러 설정
    setNext(handler) {
        this.nextHandler = handler;
    }
    //요청 넘기기
    handle(request) {
        if(this.nextHandler) // 다음 핸들러가 존재하면, request 넘기기
            return this.nextHandler.handle(request);
        return null; // 없으면 null
    }
}

class CashHandler extends Handler {
    // 요청 있으면 처리, 없으면 넘기기
    handle(request) {
        if(request.method === "cash")
            console.log(`processing cash ${request.amount} won`);
        else {
            console.log("cashHandler cannot process");
            super.handle(request);
        }
    }
}
class CreditCardHandler extends Handler {
    handle(request) {
        if(request.method === "creditCard")
            console.log(`processing creditCard ${request.amount} won`);
        else {
            console.log("cashHandler cannot process");
            super.handle(request);
        }
    }
}
class DebitCardHandler extends Handler {
    handle(request) {
        if(request.method === "debitCard")
            console.log(`processing debitCard ${request.amount} won`);
        else {
            console.log("cashHandler cannot process");
            super.handle(request);
        }
    }
}

const cashHandler = new CashHandler();
const creditCardHandler = new CreditCardHandler();
const debitCardHandler = new DebitCardHandler();

cashHandler.setNext(creditCardHandler);
creditCardHandler.setNext(debitCardHandler);

const payment1 = {
    method : "cash",
    amount : 10000
};
const payment2 = {
    method : "debitCard",
    amount : 20000
};
const payment3 = {
    method : "paypal",
    amount : 20000
};

cashHandler.handle(payment1);
console.log("-------");

cashHandler.handle(payment2);
console.log("-------");

cashHandler.handle(payment3);
console.log("-------");


// 피자 제조 과정??