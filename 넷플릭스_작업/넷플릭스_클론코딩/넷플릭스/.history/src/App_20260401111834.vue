<template>
  <div class="container_wrap">
    <div class="movie_01_box">
      <div v-for="(movie_01, i) in movie_01" :key="i">
        <img :src="movie_01.img" alt="">
      </div>
    </div>
  </div>
</template>




<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import {movie_01} from './assets/info_01.js';  
import {movie_02} from './assets/info_01.js';



export default{
  name: 'App',

  data(){
    return{
      movie_01 : movie_01,
      movie_02 : movie_02

    }
  },

  components: {

  }
}
</script>



