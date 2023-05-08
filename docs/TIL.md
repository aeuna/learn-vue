- definitely-typed : 타입스크립트 타입들을 모은 것이라 생각

https://vuejs.org/guide/typescript/overview.html

- declare module 부분 찾아보기

- vue2 + ts에서 플러그인 불러오는 방법,,, 찾아보기 (인식을 못함 ㅠ)

- ref -> 템플릿, 특정 DOM 이나 컴포넌트의 정보를 접근하기 위해 사용하는 속성

- 타입스크립트 선언 파일(d.ts)은 프로젝트 내에 선언된 다른 타입스크립트 선언 파일의 타입을 인식할 수 있습니다. VueConstruct가 뷰 라이브러리 내부 타입 선언 파일에 정의되어 있어서 자동으로 인식될거에요 :)

- 반면에 .ts 파일은 맨 위에 VueConstruct 타입을 임포트 해주셔야 할 겁니다 :)

- 터미널에서 code . 치면 해당 폴더에 해당하는 워크스페이스

- 이벤트 타입을 커스텀 타입으로 확장
```typescript
  export namespace VueEvent {
    export interface Input<T extends EventTarget> extends InputEvent {
      target: T;
    }

    export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
      target: T;
    }
  
  
   handleInput(event: VueEvent.Input<HTMLInputElement>) {}
```
