<template>
  <div class="main__week-card">
    <h2 class="main__week-card-dayname">
      {{ index == 0 ? 'Сегодня' : index == 1 ? 'Завтра' : getWeekDay }}
    </h2>
    <p class="main__week-card-day">{{ getDay }} {{ getMonth }}</p>
    <img :src="getImg" alt="" class="main__week-card-img" />
    <p class="main__week-card-temp">{{ Math.round(day.temp.max) }}°</p>
    <p class="main__week-card-reltemp">{{ Math.round(day.feels_like.day) }}°</p>
    <p class="main__week-card-type">{{ description }}</p>
  </div>
</template>

<script>
import { weatherName } from "@/icons";
import unix from "@/unix";
export default {
  props: {
    day: { typeof: Object },
    index: { typeof: Number },
  },
  computed: {
    description() {
      return this.day.weather[0].description;
    },
    getImg() {
      return weatherName[this.description] || weatherName["ясно"];
    },
    getDay() {
      return unix(this.day.dt, "day");
    },
    getMonth() {
      return unix(this.day.dt, "month");
    },
    getWeekDay() {
      return unix(this.day.dt, "weekday");
    },
  },
};
</script>