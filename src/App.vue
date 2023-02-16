<script setup>

</script>

<template>

  <div class="container">
    <div class="wrap">
      <!-- search box -->
      <div class="search-box">
        <input type="text" placeholder="Search..." class="search-bar">
      </div>

      <!-- Weather Information -->
      <div class="weather-info">

        <div class="location-box">
          <div class="location">Dhaka</div>
          <div class="date">17-12-2022</div>
        </div>

        <div class="weather-box">
          <div class="temp">22 °c</div>
          <div class="weather">dasud</div>
        </div>

      </div>

    </div>
  </div>
  
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.container{
  background-image: url('./assets/default.jpg');
  background-size: cover;
  background-position: center;
  transition: 0.4s;
  width: 375px;
  margin: 0 auto;
  border-radius: 25px;
  margin-top: 50px;
  box-shadow: 0px 0px 30px #00000065;
}

.wrap{
  height: 600px;
  padding: 25px;
  border-radius: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.4));
}

.search-box .search-bar{
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px, 0px, 8px, rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  transition: 0.4s;
}

.search-box .search-bar:focus{
  box-shadow: 0px, 0px, 16px, rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.65);
}

.location-box .location{
  color: white;
  font-size: 32px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin-top: 30px;
}

.location-box .date{
  color: white;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}

.weather-box{
  text-align: center;
}

.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  color: white;
  font-size: 100px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0,0,0,0.5);
  background-color: rgba(255, 255, 255, 0.20);
  border-radius: 15px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0,0,0,0.5);
  font-style: italic;
}

.weather-box .weather{
  color: white;
  font-size: 45px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0,0,0,0.5);
}


</style>
