import Vue from "vue";
// import Chart from "chart.js/auto";

// const ChartLib = typeof Chart;
// 아래서 ChartLib이 undefined가 뜨는데,,, ?

declare module "vue/types/vue" {
  interface Vue {
    $_Chart: any;
  }
}

// 1. 'vue'를 보충된 타입 선언 전에 import해야 합니다.
// import Vue from "vue";

// // 2. 보충하고자 하는 타입이 있는 파일을 지정하세요.
// // Vue의 constructor type은 types/vue.d.ts에 있습니다.
// declare module "vue/types/vue" {
//   // 3. Vue에 보강할 내용을 선언하세요.
//   interface Vue {
//     $_Chart: any;
//   }
// }

// @types 라이브러리가 제공되지 않는 라이브러리의 경우
// declare module "라이브러리 이름";
