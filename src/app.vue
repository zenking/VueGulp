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
        methods:{
            test:function () {
                alert("我是app自带事件");
            }
        },
        components: {
            'comp-a': compA,
            'comp-b': compB,
            'comp-c': compC
        },
        created: function () {
            this.$on('child-created', function (child) {
                alert('这是子组件c想告诉我的消息'+child);
            })
        }
    }
</script>