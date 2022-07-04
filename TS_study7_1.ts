// ? Interfaces

// Interfaces와 type
// 공통점: 타입스크립트에게 오브젝트의 모양을 알려줄 수 있다.

// 차이점:
// 상속하는 방법(문법)이 조금 다르다.
// 같은 인터페이스에 있는 다른 property들을 합치고 싶으면
// interfaces User를 반복해서 사용해야 하는데 타입스크립트가 알아서 합쳐서 하나로 만들어준다.
// 하지만 type을 사용한다면 위 내용을 할 수 없다.

// ? 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용한다.
// 추상 클래스는 인스턴스를 만드는걸 허용하지 않는다.
// 상속받는 클래스가 어떻게 동작해야할 지 알려주기 위해 추상클래스를 사용한다.
// ! 추상 클래스는 다른 클래스가 가져야 할 property랑 메소드를 명시할 수 있도록 도와준다.
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  // 두 개의 메소드
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

// User 클래스를 상속한다면, sayHi랑 fullName을 구현해야 하고
// firstName과 lastName을 갖게 됨
// protected는 추상 클래스로부터 상속받은 클래스들이 property에 접근 핟도록 해준다.
class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 인터페이스와 implements을 사용해 파일 사이즈를 줄이고 더 간결하게 만들어 줄 수 있다.
interface User2_1 {
  firstName2: string;
  lastName2: string;
  sayHi2(name: string): string;
  fullName2(): string;
}

interface Human {
  health: number;
}

// 하나 이상의 인터페이스를 동시에 상속할 수 있다.
// 인터페이스를 상속할 때에는 property를 private으로 만들지 못한다.
// implements는 자바스크립트엔 없다 implements쓰면 extends보다 코드가 가벼워진다.
class Player2 implements User2_1, Human {
  constructor(
    public firstName2: string,
    public lastName2: string,
    public health: number
  ) {}
  fullName2() {
    return `${this.firstName2} ${this.lastName2}`;
  }
  sayHi2(name: string) {
    return `Hello ${name}. My name is ${this.fullName2()}`;
  }
}
// 위 처럼 동시 상속할 경우
// 예를 들어 어댑터 패턴과 같은 디자인 패턴을 사용하여 팀과 함께 일할때
// 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 하는건 좋다.
// 모두가 같은 인터페이스를 사용한다면 같은 property와 method를 가지게 됨

// ! 인터페이스도 타입으로 사용할 수 있다. (클래스도 가능)
// 인터페이스를 리턴하거나 argument로 넣어줄때 new 블라블라 할 필요 없이 아래처럼 내용물만 넣어주면 된다.
function makeUser(user: User2_1) {
  return "Hi";
}
makeUser({
  firstName2: "hohoho",
  lastName2: "las",
  fullName2: () => "xxx",
  sayHi2: (name) => "string",
});
