<template>
  <div class="container_wrap">
    <div class="movie_01_box">
      <Swiper class="movie_swiper"
        :slides-per-view="auto"
        :slides-per-group="1"
      >
        <SwiperSlide v-for="item in movie_01" :key="item.id">
          <img :src="item.img" alt="">
        </SwiperSlide>
      </Swiper>
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
    Swiper,
    SwiperSlide
  }
}
</script>



<style>
.container_wrap{width: 100%; max-width: 1920px; }

.movie_swiper {width: 100%; max-width: 1920px; padding: 0 35px;}
.movie_swiper .swiper-slide {width: 296px !important; height: 167px;}
.movie_swiper .swiper-slide ~ .swiper-slide {margin-left: 10px;}
</style>
