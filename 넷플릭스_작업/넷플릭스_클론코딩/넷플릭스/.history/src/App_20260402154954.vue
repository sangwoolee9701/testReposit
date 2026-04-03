<template>
  <div class="container_wrap">
    <div class="visual">
      <img src="/public/img/visual_01.jpg" alt="">
    </div>


    <div class="movie_01_box">
      <h2 class="title">오늘의 발견!</h2>
      <Swiper class="movie_swiper_01"
        slides-per-view="auto"
        :slides-per-group="1"
        :slides-per-group-auto="false"
        :speed="400"
        :resistance-ratio="0"
        :watch-overflow="true"
      >

        <SwiperSlide v-for="(movie_01,i) in movie_01" :key="i">
          <img :src="movie_01.img" alt="">
        </SwiperSlide>
      </Swiper>
    </div>

    <div>
      <movie02 :movie_02="movie_02" />
    </div>


    <div class="movie_03_box">
      <h2 class="title">오늘 대한민국의 TOP 10 시리즈</h2>
      <Swiper class="movie_swiper_03"
        slides-per-view="auto"
        :slides-per-group="1"
        :slides-per-group-auto="false"
        :speed="400"
        :resistance-ratio="0"
        :watch-overflow="true"
      >
        <SwiperSlide v-for="(movie_03,i) in movie_03" :key="i">
          <div class="conts">
            <div class="num_box">
              <div class="big_num">{{ movie_03.id + 1 }}</div>
            </div>
            <div class="conts_img">
              <img :src="movie_03.img" alt="">
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="movie_04_box">
      <h2 class="title">오늘 대한민국의 TOP 10 영화</h2>
      <Swiper class="movie_swiper_04"
        slides-per-view="auto"
        :slides-per-group="1"
        :slides-per-group-auto="false"
        :speed="400"
        :resistance-ratio="0"
        :watch-overflow="true"
      >
        <SwiperSlide v-for="(movie_04,i) in movie_04" :key="i">
          <div class="conts">
            <div class="num_box">
              <div class="big_num">{{ movie_04.id + 1 }}</div>
            </div>
            <div class="conts_img">
              <img :src="movie_04.img" alt="">
            </div>
          </div>
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
import {movie_03} from './assets/info_01.js';
import {movie_04} from './assets/info_01.js';

import movie02 from './components/movie02.vue';




export default{
  name: 'App',

  data(){
    return{
      movie_01 : movie_01,
      movie_02 : movie_02,
      movie_03 : movie_03,
      movie_04 : movie_04
    }
  },

  components: {
    Swiper,
    SwiperSlide,
    movie02
  }
}
</script>



<style>
.container_wrap{width: 100%; max-width: 1920px; margin: 0 auto; }
.container_wrap > div ~ div{margin-top: 50px;}

.visual{width: 100%; max-width: 1920px; height: 700px; margin: 0 auto; overflow: hidden;}

.title{width: 100%; padding: 0 45px; box-sizing: border-box; font-size: 30px; color: #fff; margin:0 auto 20px; font-weight: 600;}

.movie_swiper_01 {width: 100%; padding: 0 35px; }
.movie_swiper_01 .swiper-slide {width: 296px !important; height: 167px;}
.movie_swiper_01 .swiper-slide ~ .swiper-slide {margin-left: 10px;}

.movie_swiper_02 {width: 100%; padding: 0 35px; }
.movie_swiper_02 .swiper-slide {width: 296px !important; height: 167px;}
.movie_swiper_02 .swiper-slide ~ .swiper-slide {margin-left: 10px;}


.movie_swiper_03 {width: 100%; padding: 0 35px; box-sizing: border-box; }
.movie_swiper_03 .swiper-slide {width: 245px !important; height: 214px;}
.movie_swiper_03 .swiper-slide ~ .swiper-slide {margin-left: 30px;}
.movie_swiper_03 .conts{display: flex;}
.movie_swiper_03 .conts .num_box{width: 85px; display: flex;justify-content: center;
align-items: center; position: relative; overflow: hidden; }
.movie_swiper_03 .conts .num_box .big_num{font-size: 277px; font-weight: 900;position: absolute ;left: -11px; top: -116px; object-fit: cover;color: transparent;-webkit-text-stroke: 4px #777676;}
.movie_swiper_03 .swiper-slide:nth-child(4) .conts .num_box .big_num{left: -5px;}
.movie_swiper_03 .conts .conts_img{width: 147px; height: 100%;}
.movie_swiper_03 .conts .conts_img img{display: block; width: 100%; height: 100%;}

.movie_swiper_04 {width: 100%; padding: 0 35px; box-sizing: border-box; }
.movie_swiper_04 .swiper-slide {width: 245px !important; height: 214px;}
.movie_swiper_04 .swiper-slide ~ .swiper-slide {margin-left: 30px;}
.movie_swiper_04 .conts{display: flex;}
.movie_swiper_04 .conts .num_box{width: 85px; display: flex;justify-content: center;
align-items: center; position: relative; overflow: hidden; }
.movie_swiper_04 .conts .num_box .big_num{font-size: 277px; font-weight: 900;position: absolute ;left: -11px; top: -116px; object-fit: cover;color: transparent;-webkit-text-stroke: 4px #777676;}
.movie_swiper_04 .swiper-slide:nth-child(4) .conts .num_box .big_num{left: -5px;}
.movie_swiper_04 .conts .conts_img{width: 147px; height: 100%;}
.movie_swiper_04 .conts .conts_img img{display: block; width: 100%; height: 100%;}

</style>
