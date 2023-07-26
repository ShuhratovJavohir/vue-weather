<template>
  <div class="main__week">
    <div class="main__week-top">
      <h2 class="main__week-top-title">На неделю</h2>
    </div>
    <div class="main__week-cards">
      <MainWeekCard
        v-for="(day, i) in weather.daily" 
        :key="i"
        :day="day"
        :index="i"
        :weather="weather"
      />
    </div>
  </div>
</template>

<script>
import MainWeekCard from "@/components/MainWeekCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    MainWeekCard,
  },
  computed: {
    ...mapState(['weather'])
  }
};
</script>