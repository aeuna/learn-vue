<template>
  <div>
    <canvas id="myChart" ref="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MyVueRefs } from "./types/index";

export default (Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
  mounted() {
    const ctx = this.$refs.myChart;

    new this.$_Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
});
</script>

<style scoped></style>
