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
	props: ['msg'],
	methods:{
		test:function (s) {
			this.$dispatch('child-created', "我想传递给”爸爸“的消息");
			alert("这是c自己的事件");
		}
	}
}
</script>