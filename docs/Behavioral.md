# Behavioral Design Pattern

### Stratege  
: **알고리즘** 캡슐화, 
- 용도 : 수정없이 알고리즘 추가, 런타임에 동적으로 변경  

> ㅇㄴㄹ너ㅏㅣ

### State  
: **상태** 캡슐화 (상태에 따라 다른 동작)
- 용도 : 수정없이 상태 추가, 런타임에 동적으로 변경  

전략패턴과 다른 점 (상태들 끼리 안다.)

### Visitor
: **알고리즘(메소드)** 캡슐화, 객체와 알고리즘(메소드)을 분리  
기존 객체 수정없이 알고리즘(메소드) 추가

### Command
: 명령을 캡슐화해서 객체로 다룸, (객체, 매개변수 정보 포함 -> 매개변수 없이 바로 실행 가능)
명령을 대기열에 담거나, 실행취소 가능

### Chain of Responsibility
: 다양한 처리로직을 캡슐화, 함수와 포인터를 가진 Handler

### Mediator  
: 객체간 상호작용을 캡슐화
객체간 직접적인 커뮤니케이션 없애 의존성을 낯춤 (직접 부르지 말고, mediator를 통해 모두 통신)
결합도를 낮춤


### Memento
: 객체의 현재 상태를 캡슐화, 보관후 복원하도록

### Templete Method
: 객체의 메소드를 템플릿으로 정의, 상속+오버라이딩으로 다형성 구현

### Iterator
: 여러타입 컨테이너에 공통적으로 접근하게 해줌
자료구조(컨테이너)와 접근기능(순회)을 분리 / 접근 인터페이스 분리