<template>
  <!-- <img src="./assets/logo.svg" alt=""> -->

  <div v-if="showFirst">안녕하세요1</div>
  <div v-else>안녕하세요2</div>

  <div class="menu">
    <!-- v-for반복문 -->
    <!-- 작명(내맘대로 작명함) in 횟수 또는 Array 데이터 -->
    <a href="#" v-for="(작명,i) in 메뉴들" :key="i">{{작명}}</a> <!-- 반복문 쓸때 꼭 key쓰고 작명한 네임 써줘야 에러 안남 -->
  </div>


  
  <Discount />

  <!-- :데이터 바인딩에 보라색 이름은 내가 작명한거 흰색은 밑에 데이터 -->
  <!-- App.vue에서 쓰는 데이터도 props보내려면 :데이바인딩르로 작명="데이터로" 보내고 만든 컴포넌트().vue에서 쓰면 됨-->
  <div class="start" :class="{ end : 모달창열렸니}"> <!-- {} -->
    <Modal @closeModal="모달창열렸니 = false" :원룸v="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니"/>
  </div>
  

  <!-- 부모가 메세지 받을 땐 @작명한거="" -->
  <!-- 누른거 뒤에 $event는 openModal 작명 뒤에 ,쓴 데이터들을 $event로 써서 나타낼수있음-->
  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" v-for="(type,i) in 원룸들" :key="type" />
  <!-- <Card :원룸="원룸들[0]" />
  <Card :원룸="원룸들[1]" />
  <Card :원룸="원룸들[2]" />
  <Card :원룸="원룸들[3]" />
  <Card :원룸="원룸들[4]" />
  <Card :원룸="원룸들[5]" /> -->



  <!-- 모달창 UI -->
  <!-- v-if 조건이 '참'일때만 html 보여줌 -->
  <!-- <div class="black-bg" v-if="모달창열렸니 == true" @click="모달창열렸니 = false"> 
    <div class="white-bg">
      <img :src="원룸들[누른거].image" alt="" class="room-img">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <p>가격 : {{ 원룸들[누른거].price }}</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div> -->


  <!-- export/import로 데이터 불러오기 + v-for반복문 -->
  <!-- roominfo 이건 내가 작명 -->
  <!-- <div v-for="(roominfo,i) in 원룸들" :key="i">
    <img :src="roominfo.image" alt="" class="room-img">
    <h3 @click="모달창열렸니 = true; 누른거 = i">{{roominfo.title}}</h3>
    <p>{{roominfo.price}}원</p>
  </div> -->


  <!-- <div> 
    <img src="./assets/room1.jpg" alt="" class="room-img">
    <h3>{{ products [1]}}</h3>
    <p>60만원</p>
    <button @click="신고수[1] += 100">허위매물 신고</button> <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div> 
    <img src="./assets/room2.jpg" alt="" class="room-img">
    <h3>{{ products [2]}}</h3>
    <p>70만원</p>
    <button @click="신고수[2]++">허위매물 신고</button> <span>신고수 : {{ 신고수[2] }}</span>
  </div> -->
</template>

<script>

// 변수로 만들어서 하든가 그냥 하든가
// import roomdata from './assets/oneroom.js';
import a from './assets/oneroom.js';

import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name : 'App',
  data(){
    return{
      // 안에 데이터는 object 자료로 저장 {자료이름(작명) : 자료 내용} ->위 htlm에 {{데이터 바인딩}} 방법을 하는 이유는 실시간으로 빠르게 스무스 하게 바뀔수있어서임/ 자주 변경이 될 것 같은 데이터는 아래처럼 object형식으로 저장함

      showFirst: true,

      누른거 : 0,

      // 원룸들 : roomdata,
      원룸들: a,


      price1 : 190,
      price2 : 70,

      // Array 함수 []
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      메뉴들 : ['Home', 'Shop', 'About'],

      신고수 : [0,0,0],

      모달창열렸니 : false,
    }
  },

  // vue함수 만드는 곳은 data 끝나는 곳에서 methods로 함수 만들고 vue에서 함수 만들때 주의 사항은 함수 안에서 데이터 쓸 땐 this.을 붙여줘야함
  // methods : {
  //   increase(){
  //     this.신고수 += 1;
  //   },
  // },


  components : {
    Discount : Discount, /* 여기( :뒤에) Discount가  import Discount from './Discount.vue'; 의 작명된 Discount이고 
    컴포넌트 :앞의 Discount는 내가 컴포넌트로 쓸 이름을 작명 보통은 둘다 네임 맞춤*/

    Modal : Modal,
    Card : Card,
  }
}
</script>

<style>
  body{margin: 0;}
  div{box-sizing: border-box;}

  .discount {background-color: #eee; padding: 10px; margin: 10px; border-radius: 5px;}

  .menu{background: darkgreen; padding: 15px; border-radius: 5px;}
  .menu a{color: #fff; padding: 10px;}

  .room-img{display: block; width: 300px; height: 200px; margin-top: 50px;}


  /* 모달창 */
  
  .black-bg{width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); position: fixed; padding: 20px;}
  .white-bg{width: 100%; background: #fff; border-radius: 8px; padding: 20px;}

  .start{opacity: 0; transition: all 1s;}
  .end{opacity: 1;}
</style> 