/*
    LSP (Liskov Subsitution Principle)

    : 부모 클래스는 자식 클래스로 치환 가능하다.
*/

/* LSP 준수 */
// 부모
class Cat {
    speak() {
        console.log("meow");
    }
}

// 자식
class BlackCat extends Cat {
    speak() {
        console.log("black meow");
    }
}

const speak = function(cat) { // Cat타입을 매개변수로
    cat.speak();
}

let cat = new Cat();
speak(cat); // 부모 실행

cat = new BlackCat();
speak(cat); // 자식 실행



/* LSP 위반 */
class Fish extends Cat { // 잘못된 부모 자식 관계
    speak() {
        console.error("Fish can't speak");
    }
}

cat = new Fish();
cat.speak(); // 치환 불가