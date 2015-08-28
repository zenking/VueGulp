<style>
    body{
        font-size:24px;
        color:green;
    }
</style>
<template>
    <div>{{msg}}</div>
    <comp-a></comp-a>
    <comp-b></comp-b>
    <comp-c msg="{{msg}}"></comp-c>
</template>
<script>
    import compA from '../components/a.vue'
    import compB from '../components/b.vue'
    import compC from '../components/c.vue'
    module.exports = {
        el: '#app',
        data:{
            msg:"哈哈哈哈"
        },
      components: {
        'comp-a': compA,
        'comp-b': compB,
        'comp-c': compC
      }
    }
</script>