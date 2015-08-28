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
	props: ['msg']
}
</script>