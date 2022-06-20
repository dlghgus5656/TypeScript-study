// Call(=Function) Signature란 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것이다
// * React에서 함수로 props를 보낼 때, 어떻게 작동할지 미리 설계 가능
// props로 함수를 보내게 되면, 타입스크립트한테 설명해줘야 한다. 어떻게 함수가 작동하는지
// 아래 코드를 call signature라고 한다.
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// type PizzaFunction = {
//   pizza: string;
//   (args: number): boolean;
// };

// function hello2(fn: PizzaFunction) {
//   console.log(fn.pizza, fn(6));
// }
