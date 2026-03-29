<template>


  <!-- 모달창 UI -->
   <!-- v-if 조건이 '참'일때만 html 보여줌 -->
  <div class="black-bg" v-if="모달창열렸니 == true" @click="모달창열렸니 = false"> 
    <div class="white-bg">
      <img :src="원룸v[누른거].image" alt="" class="room-img">
      <h4>{{원룸v[누른거].title}}</h4>
      <p>{{ 원룸v[누른거].content }}</p>
      <input @input="month = $event.target.value"> <!-- 유저가 input에 입력한 값을 데이터로 저장하기 위해서 씀 -->
      <!-- <input v-model="month"> --> <!-- 위에 축약형인데 축양형으로 많이씀 -->
       te
      <p>{{ month}}개월 선택함 : {{ 원룸v[누른거].price * month}}</p>
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