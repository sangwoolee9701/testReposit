<template>
    <!-- <div>
        <h5>{{ 블로그글v[0].title }}</h5>
        <p>{{ 블로그글v[0].date }}</p>
    </div>
    <div>
        <h5>{{ 블로그글v[1].title }}</h5>
        <p>{{ 블로그글v[1].date }}</p>
    </div>
    <div>
        <h5>{{ 블로그글v[2].title }}</h5>
        <p>{{ 블로그글v[2].date }}</p>
    </div> -->

   <div v-for="(작명,i) in 블로그글v" :key="i">
        <h5>{{작명.title }}</h5>
        <p>{{작명.date }}</p>
    </div>
</template>




<script>
export default{
    name : 'list',
    props : {
        블로그글v : Array,
    }
}
</script>







<style>
/* reset */





</style>
