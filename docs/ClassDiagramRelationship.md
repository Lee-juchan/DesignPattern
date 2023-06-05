# UML, Class Diagram  

## Relationship

- **Dependency** (references)  
    - 일시적 참조 
    - method 매개변수로 사용 (Class의 Type만 사용)

```java
public class EnrollmentService {
    public void enroll(Student s, Course c) {}
}
```  
</br>

- **Association** (has-a)  
    - 항상 참조 
    - attribute로 사용 (Class의 Instance 사용)  

```java
public class Order {
    private Customer customer;
}
```
</br>

- **Aggregation** (has-a + whole-part)  
    - 항상 참조 + 전체 부분과 관계  
    - 독립적 (생명주기 다름)  
    - attribute로 사용, 리스트 형태 (Association와 유사)  

```java
public class PlayList {
    private List<Song> songs;
}
```
```java
public class Computer {
    private Monitor monitor;
}
```
</br>

- **Composition** (has-a + whole-part + ownership)  
    - 항상 참조 + 전체 부분과 관계  
    - 종속적 (생명주기 동일)  
    - attribute로 사용 + 객체 생성  

```java
public class Apartment {
    private Room bedroon;
    
    public Apartment() {
        bedroom = new Room();
    }
}
```