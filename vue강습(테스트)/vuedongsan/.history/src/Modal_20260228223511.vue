<template>


  <!-- 모달창 UI -->
   <!-- v-if 조건이 '참'일때만 html 보여줌 -->
  <div class="black-bg" v-if="모달창열렸니 == true" @click="모달창열렸니 = false"> 
    <div class="white-bg">
      <img :src="원룸v[누른거].image" alt="" class="room-img">
      <h4>{{원룸v[누른거].title}}</h4>
      <p>{{ 원룸v[누른거].content }}</p>
      <input v-model.number="month"> 
       <!--  v-model은 Vue문법중 하나 데이터 입력한걸 month로 저장해주세요. -> @input="month = $event.target.value" 이거의 약어-->
      <!-- 데이터가 넘버여도 문자열로 인식하기 떄문에 v-model 뒤에 .number써서 숫자로 인식하게 해야함 -->



      <p>{{ month}}개월 선택함 : {{ 원룸v[누른거].price + month}}원</p>
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

  // 데이터 감시 하려면 watch씀
  watch : {
    // 
    month(a){
      if(a >= 13){
        alert('13이상 입력하지 마셈')
      }
    },
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