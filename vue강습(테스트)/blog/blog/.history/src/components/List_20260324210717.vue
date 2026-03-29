<template>
    <div>
        <h5>{{ 블로그글v[0].title }}</h5>
        <p>{{ 블로그글v[0].date }}</p>
    </div>
    <div>
        <h5>{{ 블로그글v[0].title }}</h5>
        <p>{{ 블로그글v[0].date }}</p>
    </div>
    <div>
        <h5>{{ 블로그글v[0].title }}</h5>
        <p>{{ 블로그글v[0].date }}</p>
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
