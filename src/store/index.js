import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    apiKey: "0dc4c42edd3bfedbf2cc94a830639e98",
    weather: null,
  },
  mutations: {},
  actions: {
    async getWaether(context, city) {
      try {
        let response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${context.state.apiKey}`
        );
        // Деструктуризация! Берём из response.data lat / lon / local_names
        let { lat, lon, local_names } = response.data[0];
        console.log(local_names.ru);

        //Проверка! Если название города которое мы получили в CITY равно с тем что мы получили в response
        if (local_names.ru == city) {
          let response2 = await axios.get(
            `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${context.state.apiKey}`
          );
          console.log(response2);
        } else{
          console.error('error');
        }
      } catch (error) {
        console.error("ошибка с данными 404");
      }
    },
  },
  modules: {},
});
