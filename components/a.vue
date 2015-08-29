<style>
.red {
  color: #f00;
}
</style>

<template>
    <h2 class="red">{{msg}}</h2>
</template>

<script>
module.exports = {
	replace: true,
	data () {
    	return {
    		msg: 'Hello from Component A!'
    	}
  	},
	methods:{
		test:function () {
			alert("a自己的事件");
		}
	},
	created: function () {
        this.$on('parent-created', function (parent) {
            alert("这是我从爸爸那接收的消息："+parent);
        })
    }
}
</script>
