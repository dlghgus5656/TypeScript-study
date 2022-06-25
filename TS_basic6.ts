// 아래 코드는 object의 Type을 선언 해야할 때 쓸 수 있다.
// 이 object는 제한된 양의 property만을 가질 수 있다.
// property에 대해서 미리 알지 못하지만 타입만 알고 있을 때 사용하면 됨
// type Words = {
//   [key: string]: string;
// };

// class Dict {
//   private words: Words;
//   constructor() {
//     this.words = {};
//   }
//   // 파라미터 부분에 클래스를 입력해 준 적이 없지만,
//   // 클래스를 타입으로 쓸 때는 가능하다.
//   add(word: Word) {
//     if (this.words[word.term] === undefined) {
//       this.words[word.term] = word.def;
//     }
//   }
//   def(term: string) {
//     return this.words[term];
//   }
// }

// class Word {
//   constructor(public term: string, public def: string) {}
// }

// const kimchi = new Word("kimchi", "한국의 음식");

// const dict = new Dict();

// dict.add(kimchi);
// dict.def("kimchi");

// --------------------------------------------------------------

type Words = {
  // 해시
  [key: string]: string | string[];
  //객체의 property에 대해 모르지만 타입만을 알 때 유용하다
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // word는 Word 클래스의 인스턴스 타입.
    if (!this.words[word.term]) {
      // 사전에 없는 단어이면
      this.words[word.term] = word.def;
    }
  }
  find(term: string) {
    return this.words[term];
  }
  // 단어를 삭제
  rmv(term: string) {
    delete this.words[term];
  }
  // 단어 이름 업데이트
  update(oldTerm: string, newTerm: string) {
    if (this.words.hasOwnProperty(oldTerm)) {
      this.words[newTerm] = this.words[oldTerm];
      delete this.words[oldTerm];
    }
  }
  // 사전에 저장된 단어의 개수
  size() {
    return Object.keys(this.words).length;
  }
  // 모든 사전의 이름과 뜻 출력
  all() {
    for (let [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value}`);
    }
  }
}
// words는 initializer 없이 선언해주고 contructor에서 수동으로 초기화
// constructor에 인자로 넣어 constructor가 지정해주길 바라는 게 아니므로

// 각각의 단어에 대한 클래스
class Word {
  constructor(public term: string, public def: string | string[]) {}
  // 단어 출력하는 메소드
  toString() {
    console.log(`${this.term}: [뜻] ${this.def}`);
  }
  // 단어 정의 추가
  addDef(newDef: string) {
    if (typeof this.def === "string") {
      this.def = [this.def, newDef];
    } else {
      this.def = [...this.def, newDef];
    }
  }
  // 단어 정의 수정
  updateDef(oldDef: string, newDef: string) {
    if (typeof this.def === "string") {
      if (oldDef === this.def) this.def = newDef;
    } else {
      this.def.filter((val) => val !== oldDef);
      this.def.push(newDef);
    }
  }
}

/** 출력 */
const kimchi = new Word("kimchi", "한국의 음식");
const tang = new Word("연근 갈비탕", "중국의 음식");
const sushi = new Word("스시", "일본의 음식");
kimchi.addDef("고춧가루로 배추를 버무려 숙성 및 발효시킨 음식");
kimchi.toString(); // kimchi: 한국의 음식,고춧가루로 배추를 버무려 숙성 및 발효시킨 음식
tang.toString(); // 연근 갈비탕: 중국의 음식
sushi.updateDef("일본의 음식", "밥을 뭉쳐놓고 그 위에 재료를 얹어낸 음식");
sushi.toString(); // 스시: 밥을 뭉쳐놓고 그 위에 재료를 얹어낸 음식
const dict = new Dict();
dict.add(kimchi);
dict.add(tang);
dict.add(sushi);
dict.all();
// kimchi: 한국의 음식,고춧가루로 배추를 버무려 숙성 및 발효시킨 음식
// 연근 갈비탕: 중국의 음식
// 스시: 밥을 뭉쳐놓고 그 위에 재료를 얹어낸 음식
dict.find("kimchi");
// (2) ['한국의 음식', '고춧가루로 배추를 버무려 숙성 및 발효시킨 음식']
dict.size();
// 3
dict.update("kimchi", "김치");
dict.all();
// 연근 갈비탕: 중국의 음식
// 스시: 밥을 뭉쳐놓고 그 위에 재료를 얹어낸 음식
// 김치: 한국의 음식,고춧가루로 배추를 버무려 숙성 및 발효시킨 음식
dict.rmv("연근 갈비탕");
dict.all();
// 스시: 밥을 뭉쳐놓고 그 위에 재료를 얹어낸 음식
// 김치: 한국의 음식,고춧가루로 배추를 버무려 숙성 및 발효시킨 음식
