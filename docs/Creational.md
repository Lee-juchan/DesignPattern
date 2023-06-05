# Creational Design Pattern

### Factory  
: **Factory**로 객체 생성을 분리(캡슐화)

### Factory method  
: **추상 Factory**에서 물려받은 메소드로 **객체** 생성 (1:1)
- 용도 : Factory에서 부가적인 처리 추가

> create() _ abstract, 객체 생성  
> operation() _ final, 객체 생성  + 추가 처리

### Abstracto Factory  
: **추상 Factory**에서 물려받은 메소드들로 **객체 군** 생성 (1:N)
- 용도 : 객체군 생성

> createA() _ abstract, 객체 생성  
> createB() _ abstract, 객체 생성..

### Builder  
: 설정된 값으로 객체를 **대신** 생성, **일부**를 미리 생성  
- 용도 : 생성과정이 복잡한 객체 생성 (생성자에 매개변수가 많은 경우)  

> setPropertyA() _ abstract, 속성값 설정 / 각 과정에서 자신 리턴 -> 체이닝 가능  
> setPropertyB() _ abstract, 속성값 설정..  
> build() _ abstract, 설정된 값으로 객체 생성  

### Prototype  
: 객체를 **복사**해서 새로운 객체 생성 (new x)  
- 용도 : 생성과정이 복잡한 객체 생성 (new로 생성하기 어려운 경우)  

> clone() _ abstract, 자신을 복사한 객체생성(deepcopy)  

### Singleton  
: 전역공간에 객체가 **하나만** 생성되도록 제한  
- 용도 : 무거운 객체, 유일성 보장이 필요한 객체 생성  

> getInstance() _ 유일한 자신 반환  