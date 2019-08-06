<template>
	<div :class="{'has-background-link':true,'load-container':true,show:show}">
		<div class="view">
			<img src="../assets/load.svg" alt="">
			<div class="has-text-white subtitle is-4">Loading...</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ['show']
}
</script>

<style scoped>
.load-container {
	position: absolute;
	left: 0;
	right: 0;
	height: 100vh;
	top: 0;
	display: none;
	z-index: 1000;
	justify-content: center;
}
.show {
	display: flex;
}
.loader .view {
	align-self: center;
	align-items: center;
	display: flex;
	flex-direction: column;
}
img {
	margin-top: 20vh;
}
.view div {
	text-align: center;
	margin-top: -55px;
}


</style>


