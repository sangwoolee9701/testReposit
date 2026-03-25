<template>


  <div>
    <img :src="원룸.image" alt="" class="room-img">
    <h3 @click="$emit('openModal', 원룸.title)">{{원룸.title}}</h3> <!-- 부모한테 보낼때 $emit('작명')함수 사용 -->
    <p>{{원룸.price}}원</p>
  </div>


</template>

<script>

export default {
  name : 'Card',
  props : {
    원룸 : Object,
  },
  data(){
    return{

    }
  },


}
</script>

<style>

</style>   