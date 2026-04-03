<template>
  <div class="container_wrap">






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
