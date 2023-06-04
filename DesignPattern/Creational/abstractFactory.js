/*
    abstract factory pattern

    : 여러 테마(?)를 가진 객체들 생성
        ex DarkMode(버튼, 체크박스, 스크롤바), LightMode(버튼, 체크박스, 스크롤바)
*/

class IButton { // interface
    click() {}
}
class DarkButton extends IButton { // implements
    click() {
        console.log("dark click");
    }
}
class LightButton extends IButton {
    click() {
        console.log("light click");
    }
}

class ICheckBox { // interface
    check() {}
}
class DarkCheckBox extends ICheckBox { // implements
    check() {
        console.log("dark check");
    }
}
class LightCheckBox extends ICheckBox {
    check() {
        console.log("light check");
    }
}

class IScrollbar { // interface
    scroll() {}
}
class DarkScrollbar extends IScrollbar { // implements
    scroll() {
        console.log("dark scroll");
    }
}
class LightScrollbar extends IScrollbar {
    scroll() {
        console.log("light scroll");
    }
}


// Factory
class IFactory { // Factory interface
    getButton() {}
    getChechBox() {}
    getScrollbar() {}
}

class DarkFactory extends IFactory { // Dark theme Factory
    getButton() {
        return new DarkButton();
    }
    getCheckBox() {
        return new DarkCheckBox();
    }
    getScrollbar() {
        return new DarkScrollbar();
    }
}

class LightFactory extends IFactory { // Light theme Factory
    getButton() {
        return new LightButton();
    }
    getCheckBox() {
        return new LightCheckBox();
    }
    getScrollbar() {
        return new LightScrollbar();
    }
}


const lightFactory = new LightFactory(); // light theme
const lightButton = lightFactory.getButton();
const lightCheckBox = lightFactory.getCheckBox();
const lightScrollbar = lightFactory.getScrollbar();

lightButton.click();
lightCheckBox.check();
lightScrollbar.scroll();

const darkFactory = new DarkFactory(); // dark theme
const darkButton = darkFactory.getButton();
const darkCheckBox = darkFactory.getCheckBox();
const darkScrollbar = darkFactory.getScrollbar();

darkButton.click();
darkCheckBox.check();
darkScrollbar.scroll();