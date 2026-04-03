<template>
  <div class="container_wrap">
    <div class="movie_01_box">
      <div>
        <img :src="movie_01[0].img" alt="">
      </div>
      <div>
        <img :src="movie_01[1].img" alt="">
      </div>
      <div>
        <img :src="movie_01[2].img" alt="">
      </div>
      <div>
        <img :src="movie_01[3].img" alt="">
      </div>
      <div>
        <img :src="movie_01[4].img" alt="">
      </div>
      <div>
        <img :src="movie_01[5].img" alt="">
      </div>
    </div>





  </div>
</template>




<script>
import List from './components/List.vue';


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



<style>


</style>
