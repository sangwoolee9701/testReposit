<template>
  <div class="container_wrap">
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


    <div class="movie_01_box">
      <h2 class="title">오늘 대한민국의 TOP 10 시리즈</h2>
      <Swiper class="movie_swiper_02"
        slides-per-view="auto"
        :slides-per-group="1"
        :slides-per-group-auto="false"
        :speed="400"
        :resistance-ratio="0"
        :watch-overflow="true"
      >

        <SwiperSlide>
          <div class="conts">
            <div class="num_box">
              <div class="big_num">1</div>
            </div>
            <div class="conts_img">
              <img src="/public/img/slide_02_01.jpg" alt="">
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
.title{width: 100%; max-width: 1840px; font-size: 30px; color: #fff; margin:0 auto 20px; font-weight: 600;}

.movie_swiper_01 {width: 100%; padding: 0 35px; }
.movie_swiper_01 .swiper-slide {width: 296px !important; height: 167px;}
.movie_swiper_01 .swiper-slide ~ .swiper-slide {margin-left: 10px;}


.movie_swiper_02 {width: 100%; padding: 0 35px; }
.movie_swiper_02 .swiper-slide {width: 245px !important; height: 214px;}
.movie_swiper_02 .swiper-slide ~ .swiper-slide {margin-left: 10px;}

.movie_swiper_02 .conts{display: flex;}
.movie_swiper_02 .conts .num_box{flex: 0 0 35%; /* 전체 너비의 약 35% 차지 */
    background-color: #1a1a1a; /* 짙은 회색 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden; /* 숫자가 너무 커서 잘리도록 함 */}
.movie_swiper_02 .conts .num_box .big_num{font-size: 330px; /* 아주 크게 설정 */
    font-weight: 900; /* 가장 굵은 웨이트 */
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;

    
    /* 질문의 답변: 아웃라인(속이 빈) 숫자 만들기 */
    
    /* 1. 배경과 동일한 색으로 채우고 투명도 설정 (선택 사항, 여기서는 텍스트를 투명하게 함) */
    color: transparent; 
    
    /* 2. 아웃라인(선) 추가 - 핵심 트릭 */
    /* text-stroke는 아직 표준이 아니므로 브라우저 호환성을 위해 prefix 필요 */
    -webkit-text-stroke: 4px #fff; /* 흰색 4px 선 */
    text-stroke: 4px #fff; 

    /* 3. 약간의 그림자를 주어 선을 더 선명하게 만듦 (선택 사항) */
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    
    line-height: 0.8; /* 세로 간격 조정 */}
.movie_swiper_02 .conts .conts_img{width: 147px; height: 100%;}
.movie_swiper_02 .conts .conts_img img{display: block; width: 100%; height: 100%;}
</style>
