/*
    ISP (Interface Segregation Principle)

    : 인터페이스를 작은 단위로 분리해야한다. (하나의 책임만 갖도록)
*/

// ex1

/* ISP 위반 */
// Interface (수륙양용차)
class ICarBoat {
    // 차 interface
    drive() {}
    turnLeft() {}
    turnRight() {}

    // 배 interface 
    steer() {}
    steerLeft() {}
    steerRight() {}
}

class Genesis extends ICarBoat { // interface 구현
    drive() {}
    turnLeft() {}
    turnRight() {}

    // 필요없는 배 interface도 구현해야함
    steer() {}
    steerLeft() {}
    steerRight() {}
}



/* ISP 준수 */
// Car interface
class ICar {
    drive() {}
    turnLeft() {}
    turnRight() {}
}

// Boat interface
class IBoat {
    steer() {}
    steerLeft() {}
    steerRight() {}
}

// 구현체
class Genesis extends Car {
    drive() {}
    turnLeft() {}
    turnRight() {}
}

class MoterBoat extends IBoat {
    steer() {}
    steerLeft() {}
    steerRight() {}
}

// 다중 상속 사용
class CarBoat extends Car/*, Boat*/ {
    drive() {}
    turnLeft() {}
    turnRight() {}

    steer() {}
    steerLeft() {}
    steerRight() {}
}