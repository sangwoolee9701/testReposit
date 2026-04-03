<template>
  <div class="container_wrap">
    <div class="movie_01_box">
      <Swiper class="movie_swiper"
        slides-per-view="auto"
        :slides-per-group="1"
        :slides-per-group-auto="false"
        :speed="400"
        :resistance-ratio="0"
        :watch-overflow="true"
      >
        <!-- <SwiperSlide v-for="item in movie_01" :key="item.id">
          <img :src="item.img" alt="">
        </SwiperSlide> -->

        <SwiperSlide v-for="(movie_01,i) in movie_01" :key="i">
          <img :src="movie_01.img" alt="">
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
.container_wrap{width: 100%; max-width: 1920px; margin: 0 auto; }

.movie_swiper {width: 100%; padding: 0 35px; }
.movie_swiper .swiper-slide {width: 296px !important; height: 167px;}
.movie_swiper .swiper-slide ~ .swiper-slide {margin-left: 10px;}
</style>
