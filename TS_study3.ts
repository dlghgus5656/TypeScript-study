// 오버로딩(Overloading)

// 오버로딩은 한편으론 여러 Call(=Function) Signature가 있는 함수라고 할 수 있다.
// 오버로딩 간단 예시
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add2: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

//----------------------------------------------------------------
// 아래는 패키지나 라이브러리를 디자인할 때 많이 사용되는 형식의 코드이다.
// 오버로딩은 이런식으로도 쓰여진다.
type Config = {
  path: string;
  state: object;
};

type Push = {
  // void는 아무것도 return하지 않는다.
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
//  -----------------------------------------------------

// 아래에서 c는 옵션같은 것이다.
// 이 경우에는 Call(=Function) Signature의 파라미터의 개수가 다를때 일어나는 경우다.
type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// 따라서 아래에 c에 number일 수도 있다는 것을 알려주어야한다.
const add3: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add3(1, 2);
add3(1, 2, 3);
