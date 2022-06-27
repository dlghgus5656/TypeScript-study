// |는 or
// &는 and이다.

type Age = number;

// Alias방법 (name: string;) 과 같이 string, number같은 것으로 타입을 지정 하는 것
type Player = {
  // ! 아래처럼 readonly를 사용하면 읽기 전용으로 바뀐다. 즉 수정이 금지됨
  // ? JavaScript에서는 mutability(변경 가능성)이 기본값이지만
  // ? 타입스크립트에서는 readonly를 통해 읽기 전용으로 만들 수 있다.
  readonly name: string;
  //   age?: number;
  // ! 위에서 Age 타입을 number로 지정해주면 아래 처럼도 가능하다.
  age?: Age;
};

// ! age? 에서 ?는 age라는 값이 있을 수도 있고 없을 수도 있다는것을 의미한다
// 즉 선택적 타입이다.

// ? Alias방법으로 안하면 아래 코드처럼 각각 다 써줘야 해서 불편함
// const playerNico: {
//   name: string;
//   age?: number;
// } = {
//   name: "nico",
// };

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "lynn",
  age: 12,
};

// ! object의 타입을 명시적으로 정해주는 방법
// ! name: string 이건 argument의 타입을 지정하는 방법
// ! : Player 이건 return값의 타입을 지정하는 방법

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }

// ? 위 코드를 화살표함수로 바꾼 아래 코드
const playerMaker = (name: string): Player => ({ name });

// ! 위에서 타입 Player를 지정해주지 않는다면 아래 nico.age는 에러가 발생한다.
const Nico = playerMaker("nico");
nico.age = 12;

// if(Player.age && Player.age)

// -----
const age: readonly number[] = [1, 2, 3];
// 이렇게 readonly를 타입 지정에 사용해줄 수도 있다.
// 아래는 readonly에 반하기 떄문에 실행되지 못한다.
// age.push(4);

// 이렇게 반드시 순서대로 들어가야하는 배열을 만들어 줄수도있다.
const abc: [string, number, boolean] = ["nico", 1, true];

// any를 사용하면 타입스크립트의 보호장치를 없애줘 그냥 자바스크립트처럼 사용할 수 있게 해준다.

//unknown은 변수의 타입을 미리 알지 못 할때 (api의 응답방법을 모를때와 같은) 사용한다.
// 이 경우 아래처럼 변수의 타입을 미리 지정하면 동작할 수 있다.
let x: unknown;

if (typeof a === "number") {
  let b = a + 1;
}

if (typeof a === "string") {
  let b = a.toUpperCase();
}

// void는 아무것도 return하지 않는 함수를 대상으로 사용한다.
// hello에 마우스를 가져다 대보면 확인할 수 있다.
// void는 비어있는것을 의미한다 아무 타입도 없다는 뜻
function hello() {
  console.log("x");
}

// never은 함수가 절대 return하지 않을 때 발생한다.
// 예를 들어 함수에서 exception(예외)이 발생할 때
function hellow(): never {
  //아래 코드는 에러를 발생시키는 코드이다 never은 이럴 때 사용한다.
  throw new Error("xxx");
}

function helloww(namee: string | number) {
  // 또한 타입이 두개 일경우에도 사용한다.
  // 각 namee에 마우스를 대보면 타입을 알 수 있다.
  if (typeof namee === "string") {
    namee;
  } else if (typeof namee === "number") {
    namee;
  } else {
    namee;
  }
}
// namee 타입을 string 아님 number 두가지로 줬기 때문에
// if문 첫째 둘째 줄은 실행될 수 있지만 셋째 줄은 절대 실행 되지 않는다.

// ! ------------------------------------------------------------

// void, never, unknown
// void : 평소대로 함수를 선언하거나 변수를 만들면 유효한 값의 타입이라고 알려줌
// ㄴ 따로 지정할 필요 X
// never : 절대 실행되지 않는 값을 의미함(평소에는 쓰지 않지만 알아둬야함)
// unknown : 변수의 타입을 모를때 unknown으로 지정가능
// ex) let a : unknown
// ->이러면 a를 쓸때 a 의 타입을 정해줘야한다.
// --> if(typeof a){}

// cf) 이와 별개로 변수의 타입을 둘중 하나로 정해줄때도 typeof로 변수의 타입을 정해줘야 한다.
// function something(name : string | number) {
// if(typeof name === String){
// }else if(typeof name === number){
// }else{
// 다 나눠 준뒤 맨 아래 else값에 있는 값은 never값이다
// }
// }

// void
// void는 값을 반환하지 않는 함수의 반환 값을 나타낸다. 함수에 return 문이 없거나 해당 return 문에서 명시적 값을 반환하지 않을 때 항상 유추되는 타입이다.
// ```

// function noop() {
// return;
// }
// ```
// unknown
// unknown타입은 모든 값을 나타낸다. 이것은 any타입과 비슷하지만 any보다 unknown이 더 안전하다. 이유는 unknown값으로 작업을 수행하는 것은 합법적이지 않기 때문이다.
// ```
// function hello(a: any) {
// a.b(); // OK
// }

// function hello2(a: unknown) {
// a.b(); // 에러: Object is of type 'unknown'.
// }
// ```
// never
// 일부 함수는 값을 반환하지 않는다.
// 이는 함수가 예외를 throw하거나 프로그램 실행을 종료함을 의미한다.
// ```
// function fail(msg: string): never {
// throw new Error(msg);
// }
// ```
