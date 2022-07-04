// Challenge goals:
// generics. call signatures 등 이때까지 배운 것을 활용하여 아래 함수를 구현하세요.
// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.

type Last = {
  <T>(arr: T[]): T;
};

type Prepend = {
  <T, I>(arr2: (T | I)[], item: I): (T | I)[];
};

const last: Last = (arr) => arr[arr.length - 1];
const la = last([1, 2, 3]);
console.log(la);

const prepend: Prepend = (arr2, item) => {
  arr2.unshift(item);
  return arr2;
};

const pp = prepend([1, 2, 3], 0);
console.log(pp);
