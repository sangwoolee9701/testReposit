<template>


  <!-- 모달창 UI -->
   <!-- v-if 조건이 '참'일때만 html 보여줌 -->
  <div class="black-bg" v-if="모달창열렸니 == true" @click="모달창열렸니 = false"> 
    <div class="white-bg">
      <img :src="원룸들[누른거].image" alt="" class="room-img">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <p>가격 : {{ 원룸들[누른거].price }}</p>
      <button @click="$emit('close')">닫기</button>
    </div>
  </div>

</template>

<script>

export default {
  name : 'Modal',
  props : {
    원룸들 : Array,
    누른거 : Number,
    모달창열렸니 : Boolean, /* ture/false는 불리언(Boolean) 자료*/
  },
  data(){
    return{

    }
  },


}
</script>

<style>

</style>   