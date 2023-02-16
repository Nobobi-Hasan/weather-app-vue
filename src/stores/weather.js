import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    api_key: 'd0d355474b26acd7a7e28f86a6a9e2a0',
    weather_icon: ' http://openweathermap.org/img/wn/',
    location_query: '',
    weather: {}, 

  }),

  getters: {

  },

  actions: {

    async fetchWeather(e){
      // console.log(e);
      if(e.key == 'Enter'){
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);

        console.log(data);
        this.weather = data;
      }
    }

  },
})
