<template>


  <!-- 모달창 UI -->
   <!-- v-if 조건이 '참'일때만 html 보여줌 -->
  <div class="black-bg" v-if="모달창열렸니 == true" @click="모달창열렸니 = false"> 
    <div class="white-bg">
      <img :src="원룸v[누른거].image" alt="" class="room-img">
      <h4>{{원룸v[누른거].title}}</h4>
      <p>{{ 원룸v[누른거].content }}</p>
      <input @input="month = $event.target.value">
      <p>{{}}개월 선택함 : {{ 원룸v[누른거].price }}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>

</template>

<script>

export default {
  name : 'Modal',
  data(){
    return{
      month : 1,
    }
  },

  props : {
    원룸v : Array,
    누른거 : Number,
    모달창열렸니 : Boolean, /* ture/false는 불리언(Boolean) 자료*/
  },
  

}
</script>

<style>

</style>   