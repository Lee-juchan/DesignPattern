# Behavioral Design Pattern

### Strategy  
: **알고리즘** 캡슐화  
- 객체-알고리즘 분리  

---

### Visitor
: **알고리즘**(메소드) 캡슐화  
- 객체-알고리즘(메소드) 분리  

> **Visitor** : 알고리즘(메소드)  
>
> **visit**(element) : 객체에 실행할 알고리즘 _ abstract  

> **Element** : 대상 객체  
>
> **accept**(visitor) : visit() 실행 _ abstract  

- Strategy vs Visitor  

| | Strategy | Visitor  
:---: | :---: | :---:  
전달되는 곳 | 속성 | 매개변수  

---

### State  
: 각 상태에 동작을 위임해, **상태** 캡슐화  
- 객체-상태 분리  
- 용도 : 상태별 동작이 복잡한 경우  
.
- Strategy vs State  

| | Strategy | State  
:---: | :---: | :---:  
전략/상태간 | 서로 모름 | 서로 앎  

---

### Command
: 명령에 필요한 정보를 미리 등록해, **명령** 캡슐화  
- 호출객체-수신객체 분리  
- 용도 : 필요시 실행 (바로실행, 실행취소, 대기열)

---

### Chain of Responsibility
: 각 처리를 **핸들러**로 변환해, **처리단계** 캡슐화, 핸들러를 따라 요청 전달  
- 호출객체-수신객체 분리  
- 용도 : 여러 처리단계를 거치는 경우, 여러 객체에 처리를 요청하는 경우  

> **Handle** : 처리기능을 수행하는 단위  
>
> **handle**() : 요청 처리 or 전달 (다음 핸들러로)  

---

### Observer  
: 객체에 발생하는 **이벤트**를 여러 객체에 알림 (polling x)  
- 객체간 결합 감소
- 용도 : 이벤트 처리  

> **Publisher** : 대상, 관찰자에게 알림  
> 
> **add**() : Observer 등록  
> **delete**() : Observer 제거  
> **notify**() : 모든 Observer의 update() 실행  

> **Observer** : 관찰자, 알림받을 대상  
> 
> **update**() : 동작 실행  _ abstract

---

### Mediator  
: 모든 객체가 Mediator를 통해 상호작용해, **객체간 상호작용** 캡슐화  
- 객체간 결합 감소  

---

### Templete Method
: **템플릿 메소드**를 정의하고, 오버라이딩으로 세부사항 수정  
- 용도 : 전체 구조는 동일하고, 세부사항만 약간 다른 경우  

> **templeteMethod**() : 수행되는 뼈대 _ final  

---


### Iterator
: 다양한 **컨테이너**를 **순회**하는 인터페이스 제공  
- 자료구조-접근기능 분리  

> **Iterator** : 순회 인터페이스 제공하는 객체  
>
> **next**() : container의 다음 값 반환 _ abstract  
> **hasNext**() : 다음 값 존재여부 반환 _ abstract  

---

### Memento
: 객체의 **이전상태** 보관, 복원  
- 용도 : 버전관리, rollback  

> **Memento** : 이전 상태를 보관하는 객체  
>
> **create**() : memonto 생성  
> **restore**() : 이전상태 복원  