<template>
  <div class="main__content">
    <div class="main__content-left">
      <h2 class="main__content-left-temp">
        {{ Math.round(weather.current.temp) }}°
      </h2>
      <h2 class="main__content-left-today">Сегодня</h2>
      <p class="main__content-left-time">Время: {{ getTime }}</p>
      <p class="main__content-left-city">
        Город: {{ weather.name.toUpperCase() }}
      </p>
      <div class="main__content-left-img">
        <img :src="getImg" alt="sun img" />
      </div>
    </div>

    <div class="main__content-right">
      <img
        src="@/assets/images/main-bg.svg"
        alt=""
        class="main__content-right-bg"
      />
      <div class="main__content-right-items">
        <div class="main__content-right-item">
          <div class="main__content-right-img">
            <img src="@/assets/images/temp.svg" alt="" />
          </div>
          <h2 class="main__content-right-name">Температура</h2>
          <p class="main__content-right-info">{{ Math.round(weather.current.temp) }}° - ощущается как  {{Math.round(weather.current.feels_like)}}°</p>
        </div>

        <div class="main__content-right-item">
          <div class="main__content-right-img">
            <img src="@/assets/images/pressure.svg" alt="" />
          </div>
          <h2 class="main__content-right-name">Давление</h2>
          <p class="main__content-right-info">
            {{ weather.current.pressure }} мм ртутного столба - 
            {{ weather.current.pressure > 0 && weather.current.pressure < 700 ? 'низко' : weather.current.pressure > 700 &&  weather.current.pressure <  900 ? 'Нормально' : 'Высокий'   }}
          </p>
        </div>

        <div class="main__content-right-item">
          <div class="main__content-right-img">
            <img src="@/assets/images/precipitation.svg" alt="" />
          </div>
          <h2 class="main__content-right-name">Осадки</h2>
          <p class="main__content-right-info">{{ weather.current.clouds == 0 ? 'без осадков' : weather.current.clouds + '%' }}</p>
        </div>

        <div class="main__content-right-item">
          <div class="main__content-right-img">
            <img src="@/assets/images/wind.svg" alt="" />
          </div>
          <h2 class="main__content-right-name">Ветер</h2>
          <p class="main__content-right-info">
            {{ weather.current.wind_speed }} 
            м/с юго-запад - 
            {{ weather.current.wind_speed > 2 && weather.current.wind_speed < 10 ? 'легкий ветер' : 'Сильный ветер'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { weatherName } from "@/icons";
export default {
  computed: {
    ...mapState(["weather"]),

    description() {
      return this.weather.current.weather[0].description;
    },

    getImg() {
      return weatherName[this.description] || weatherName["ясно"];
    },

    getTime() {
      return new Date().toLocaleString("en-US", {
        timeZone: this.weather.timezone,
        timeStyle: "short",
        hourCycle: "h23",
      });
    },
  },
};
</script>