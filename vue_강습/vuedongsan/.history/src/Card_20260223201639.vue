<template>


  <div>
    <img :src="원룸.image" alt="" class="room-img">
    <h3>{{원룸.title}}</h3>
    <p>{{원룸.price}}원</p>
  </div>


</template>

<script>

export default {
  name : 'Card',
  props : {
    원룸11 : Object,
  },
  data(){
    return{

    }
  },


}
</script>

<style>

</style>   