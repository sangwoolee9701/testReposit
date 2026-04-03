<template>
    <!-- <div>
        <h5>{{ 블로그글v[0].title }}</h5>
        <p>{{ 블로그글v[0].date }}</p>
    </div>
    <div>
        <h5>{{ 블로그글v[1].title }}</h5>
        <p>{{ 블로그글v[1].date }}</p>
    </div>
    <div>
        <h5>{{ 블로그글v[2].title }}</h5>
        <p>{{ 블로그글v[2].date }}</p>
    </div> -->

   <!-- <div v-for="(작명,i) in 블로그글v" :key="i">
        <h5>{{작명.title }}</h5>
        <p>{{작명.date }}</p>
    </div> -->

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
