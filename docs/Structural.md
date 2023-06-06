# Structural Design Pattern

### Decorator
: Decorator로 감싸서 새로운 **기능 확장**, 중첩 가능
- 용도 : 동적으로 기능 확장 (수정x, 상속x)

> **Decorator** : abstract, 감싸는 클래스들 정의 (wrapper)

---

### Adaptor  
: Adaptor로 감싸서 기존 인터페이스로 **변환**  
- 용도 : 인터페이스가 다른 경우 (ex 외부 라이브러리)

> **Adoptor** : 감싸는 클래스 (wrapper)
> **Adoptee** : 감싸지는 클래스

---

### Facade
: 다양한 서브 클래스들을 **통합**하는 인터페이스 제공
- 용도 : 구조가 복잡한 경우 (참조하는 클래스가 많은 경우)

---

### Proxy
: 원본객체 **대신** 기능 수행  
- 용도 : 흐름제어, 추가 처리  

    - `가상 프록시` : Lazy initialization
    - `원격 프록시` : 원격객체 사용
    - `보호 프록시` : 접근권한 제어
    - `캐싱 프록시` : 캐싱

> **Proxy** : 원본객체 대신 일을 처리하는 클래스

---

### Bridge
: **추상부**과 **구현부** 분리  
- 용도 : 독립적인 확장

> **Abstraction** : 추상 부분       (ex 도형, 캐릭터, 화면)  
> **Implementation** : 구현 부분    (ex 색깔, 아이템, 화면 출력 방법)  

---

### Flyweight
: 재사용 가능한 객체들을 (**외부 데이터 구조**에 두고) **공유**  (Hash consing) (new x)
- 용도 : 중복이 많은 경우, 메모리 사용 최소화  

> **Flyweight** : abstract, 공유할 클래스 정의  
> **FlyweightFactory** : 공유할 객체를 생성하고 공유  

- Flyweight vs Singleton  

Flyweight | Singleton  
:---: | :---:  
불변 | 가변  
**한 종류**의 객체 | **하나**의 객체  

---

### Composite
: **부분**(단일 객체)과 **전체**(집합 객체)를 **동일**하게 취급  
- 용도 : 트리 구조  

> **Component** : abstract, Leaf와 Composite을 묶는 공통 단위  
> **Leaf** : 단일 객체  
> **Composite** : 집합 객체  
> 
> **add**(), **remove**() : 집합에 추가, 삭제