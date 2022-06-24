// Classes

// 메소드는 클래스안에 존재하는 함수이다.

// 추상(abstract) 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// 추상클래스 안에서는 추상메소드를 만들 수 있다.
// 하지만 직접 새로운 인스턴스를 만들 수는 없다.

// private를 사용하면 상속받은 클래스 안에서 마저도 this 사용해 접근 불가능
// 그래서 protected를 사용하면 상속받은 클래스 안에서 this 사용해 접근 가능
// 물론 protected로 지정된 것들은 외부에서 사용이 불가능
// 추상클래스 안에 메소드는 적어서는 안되고 call signature만 적어야 함
// 추상클래스 안의 메소드는 결국 구현이 되지 않는다고 나옴

// 필드가 외부로부터는 보호되지만
// 다른 자식 클래스에서는 사용되기를 원한다면 private가 아닌 protected를 사용하자
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Player2가 User을 상속한다.
class Player2 extends User {
  // 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시
  //구현(implement)해야하는 메서드이다.
  getNickName() {
    console.log(this.nickname);
  }
}

const hoho2 = new Player2("hoho", "las", "호호");
// 추상클래스의 인스턴스를 만들 수 없다.
const hoho3 = new User("hoho", "las", "호호");

// 타입스크립트에선 아래처럼 private으로 설정하면 보호를 받을 수 있다.
hoho2.firstName;

hoho2.getFullName;

// 접근 가능한 위치

// 구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
// private 　 　　　⭕　　　　　　　❌　　　　　❌
// protected 　　　⭕　　　　　　　⭕　　　　　❌
// public　　　　　⭕　　　　　　　⭕　　　　　⭕

// public: 모든 클래스에서 접근 가능
// private: 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
// protected: 해당 클래스와 자식 클래스에서 접근 가능
