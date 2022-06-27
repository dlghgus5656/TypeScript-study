// ! 다형성(polymorphism) -  poly는 많은, 다수의 라는 뜻 - morphism는 형태나 구조 혹은 모양이란 뜻
// 다형성이란, 여러 타입을 받아들임으로써 여러 형태를 가지는 것을 의미

// ! generic(타입에 유연성을 제공, 타입 정보가 동적으로 결정되는 타입)
// 타입을 마치 함수의 파라미터처럼 사용하는 것
// 특정한 타입을 지정하기 곤란할때 사용
// any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
// any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.
// 'any'를 사용하는 것은 어떤 타입이든 받을 수 있다는 점에서
// 'generics'과 같지만 함수를 반환하는데 있어
// 'any'는 받았던 인수들의 타입을 활용하지 못한다
// 즉, 'generics'은 어떤 타입이든 받을 수 있다는 점에서
// 'any'와 같지만 해당 정보를 잃지 않고
// 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다
type SuperPrint = {
  // <generic명칭>(변수: generic명칭[]): return값
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

// arr배열의 첫번째 값을 리턴해라
const superPrint: SuperPrint = (arr) => arr[0];

// generic을 사용하면 아래와 같이 타입들을 자동으로 지정해준다.
// 따라서 Call(=Function) Signature부분에서 일일이 타입을 지정해 주지 않아도 된다.
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
const a = superPrint(["a", "b", "c"]);
const b = superPrint([1, 2, true, false, "hi"]);

// 1. 함수의 Call(=Function) Signature를 입력할 때, Placeholder을 사용했다.
// 2. 이게 바로 다형성(polymorphism)이다.

// ? 제네릭(generic) 기본 문법
function getTest<T>(test: T): T {
  return test;
}

// 인자를 여러개 사용할 때
function getTest2<T, X>(test: T, b: X): T {
  return test;
}

// Generics
// 제네릭은 C#이나 Java와 같은 언어에서 재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법이다.
// 단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성할 수 있다.
// (구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다.)
// 타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재사용성을 높일 수 있습니다.
