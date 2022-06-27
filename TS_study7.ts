// ? Interfaces

// type이 특정 값을 가지도록 제한
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// interface는 오브젝트의 모양을 특정해주기 위한 한가지 기능을 가지고 있다.
// interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명해 주기 위해서만 사용되는 키워드이다.
interface Player4 {
  nickname: string;
  team: Team;
  health: Health;
}
// todo 아래 처럼 type으로 오브젝트의 모양을 특정 할 수도 있다.
// todo interface와 다른 점은 type 키워드가 더 활용할 수 있는게 많다는 것이다.
// type Player4 = {
//   nickname: string;
//   team: Team;
//   health: Health;
// };

// ! interface로는 아래 코드를 실행하지 못한다.
// interface Hello = string

// team은 "red" | "blue" | "yellow"만 가능하고
// health는 1 | 5 | 10 만 가능하다.
const hoho4: Player4 = {
  nickname: "hoho",
  team: "blue",
  health: 5,
};

// ! ----------------------------------------------------------------

// ? 다시 한번, 인터페이스는 타입스크립트에게 오브젝트의 모양을 설명해 주기 위해 존재한다.
interface User2 {
  // readonly 사용가능
  // readonly name:string
  name: string;
}

// 인터페이스는 클래스와 닮았다.
// 인터페이스는 인터페이스를 상속할 수 있다.
// 문법 구조가 객체지향 프로그래밍과 유사하다.
interface Player5 extends User2 {}

const hoho5: Player5 = {
  name: "hoho",
};

// todo- type으로 할 경우
// type User2 = {
//     name: string
// }

// type Player5 = User2 & {

// }

// const hoho5 : Player5 = {
//     name: "hoho"
// }
