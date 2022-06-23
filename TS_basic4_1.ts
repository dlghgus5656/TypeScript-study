function superPrint2<T>(a: T[]) {
  return a[0];
}

// 타입을 직접 명시해주기보단,
// 타입스크립트가 스스로 어떤 타입인지 찾게하는 것이 항상 제일 좋다.
superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true]);
const c = superPrint2(["a", "b", "c"]);
const d = superPrint2([1, 2, true, false, "hi"]);

// 많은 것들이 있는 큰 타입 하나에서 그 중 달라질 수 있는 타입이라면
// 그 타입에 extraInfo: E 같이 generic을 사용하자( 해당 타입을 재사용할 수 있다.)
type Player<E> = {
  name: string;
  extraInfo: E;
};

type HohoExtra = {
  favFood: string;
};

type HohoPlayer = Player<HohoExtra>;

const hoho: HohoPlayer = {
  name: "hoho",
  extraInfo: {
    favFood: "kimchi",
  },
};

// type들 끼리 일종의 상속 굳이 따지자면 재사용 할 수 있다.
const haha: Player<null> = {
  name: "haha",
  extraInfo: null,
};

// function printNumbers(arr2: number[]){}
// 위 같은 코드를 아래와 같이 바꿀 수 있다.
// Array에 generic이 포함되어 있다.
function printNumbers(arr2: Array<number>) {}
