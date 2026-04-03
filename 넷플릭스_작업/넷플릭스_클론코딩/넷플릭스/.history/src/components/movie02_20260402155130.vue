<template>
    <div class="movie_02_box">
      <h2 class="title">로맨스 시리즈</h2>
      <Swiper class="movie_swiper_02"
        slides-per-view="auto"
        :slides-per-group="1"
        :slides-per-group-auto="false"
        :speed="400"
        :resistance-ratio="0"
        :watch-overflow="true"
      >

        <SwiperSlide v-for="(movie_02,i) in movie_02" :key="i">
          <img :src="movie_02.img" alt="">
        </SwiperSlide>
      </Swiper>
    </div>
</template>




<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


export default{
    name : 'movie02',
    props : {
        movie_02 : Array,
    }
}
</script>







<style>
/* reset */





</style>
