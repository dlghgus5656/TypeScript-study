// todo Polymorphism, generic, class, interface

// 순서 - 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에
// 인터페이스는 제네릭을 사용한다.
interface SStorage<T> {
  [key: string]: T;
}

// 제네릭은 다른 타입에게 물려줄 수 있다.
// LocalStorage<T> 제네릭은 클래스 이름에 들어오지만 이 제네릭을 인터페이스로 보내줄 수 있다.
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  // get을 사용하면 string을 보내주고, T를 받는다.
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
//LocalStorage<string> 처럼 LocalStorage을 string로 가져왔기 때문에 value는 srting여야 한다.
stringsStorage.get("cat");
stringsStorage.set("hello", "how are you");

const booleansStorage = new LocalStorage<boolean>();
//LocalStorage<boolean> 처럼 LocalStorage을 boolean으로 가져왔기 때문에 value는 boolean여야 한다.
booleansStorage.get("kat");
booleansStorage.set("hello", true);
