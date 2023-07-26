<template>
  <div class="main__week">
    <div class="main__week-top">
      <h2 class="main__week-top-title">На неделю</h2>
      <!-- <h2 class="main__week-top-title2">Отменить</h2> -->
    </div>
    <div class="main__week-cards">
      <div class="main__week-card" v-for="week in daily" :key="week.id">
        <h2 class="main__week-card-dayname">Сегодня</h2>
        <p class="main__week-card-day">28 авг</p>
        <img src="@/assets/images/sun.svg" alt="" class="main__week-card-img" />
        <p class="main__week-card-temp">{{ Math.round(week.temp.day) }}°</p>
        <p class="main__week-card-reltemp">{{ Math.round(week.feels_like.day) }}°</p>
        <p class="main__week-card-type">{{ week.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["weather"]),
    daily() {
      return this.weather.daily.slice(0, 7);
    },
  },
};
</script>