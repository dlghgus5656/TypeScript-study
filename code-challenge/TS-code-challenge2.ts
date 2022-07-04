// Challenge goals:
// Typescript Classes 를 사용하여, Dict (dictionary) class 를 빌드하세요. Dict은 아래와 같은 methods 를 갖고있어야 합니다.

// add: 단어를 추가함.
// get: 단어의 정의를 리턴함.
// delete: 단어를 삭제함.
// update: 단어를 업데이트 함.
// showAll: dictionary 의 단어를 모두 프린트함.
// count: dict 단어들의 총 count 를 리턴함.

type Words3 = {
  [key: string]: string | string[];
};
class Dict3 {
  private words: Words3;
  constructor() {
    this.words = {};
  }
  // add: 단어를 추가함.
  add(word: Word3) {
    // word는 Word 클래스의 인스턴스 타입.
    if (!this.words[word.term]) {
      // 사전에 없는 단어이면
      this.words[word.term] = word.def;
    }
  }
  // get: 단어의 정의를 리턴
  get(term: string) {
    return this.words[term];
  }
  // delete: 단어를 삭제함.
  delete(term: string) {
    delete this.words[term];
  }
  // update: 단어를 업데이트 함.
  update(oldTerm: string, newTerm: string) {
    if (this.words.hasOwnProperty(oldTerm)) {
      this.words[newTerm] = this.words[oldTerm];
      delete this.words[oldTerm];
    }
  }
  // count: dict 단어들의 총 count 를 리턴함.
  count() {
    return Object.keys(this.words).length;
  }
  // showAll: dictionary 의 단어와 정의를 모두 프린트함.
  showAll() {
    for (let [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value}`);
    }
  }
}

class Word3 {
  constructor(public term: string, public def: string | string[]) {}
  // 단어 출력하는 메소드
  toString() {
    console.log(`${this.term}: [뜻] ${this.def}`);
  }
}

// 출력
const kimchi3 = new Word("kimchi", "한국의 음식");
const dimsum = new Word("딤섬", "중국의 음식");
const sushi3 = new Word("스시", "일본의 음식");

kimchi.toString();
dimsum.toString();
sushi.toString();

const dict3 = new Dict3();

dict3.add(kimchi);
dict3.add(dimsum);
dict3.add(sushi);

dict3.get("kimchi"); // 한국의 음식

dict3.count(); // 3

dict3.showAll();

dict3.update("kimchi", "김치");
dict3.showAll();

dict3.delete("딤섬");
dict3.showAll();
