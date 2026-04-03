<template>
  <div class="container_wrap">
    <h5>Vue 개발자 블로그 입니다.</h5>
    <p>Vue로 만들었음</p>
  </div>

  <div style="margin-bottom: 80px;">
    <List :블로그글v="블로그글a"/>
  </div>
  <div>
    <Hi :블로그글vv="블로그글b" />
  </div>

  


</template>




<script>
import List from './components/List.vue';
// import blog from './assets/blog.js';

import {aa} from './assets/blog.js';
import {bb} from './assets/blog.js';

import Hi from './components/Hi.vue';

export default{
  name: 'App',

  data(){
    return{
      블로그글a : aa,
      블로그글b : bb

    }
  },

  components: {
    List : List,
    Hi : Hi,
  }
}
</script>



<style>


</style>
