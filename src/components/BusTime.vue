<template>
	<div class="bus-time">
		<p class="arrival-time">{{arrivalTime}}</p>
		<p class="time">当前时间：{{time}}</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	arrivalTime: '沪D-C2366 还有4站，约5分钟',
    	time: '6:31'
    }
  }
}
</script>

<style lang="less">
	.bus-time {
		background-image: linear-gradient(to bottom,transparent 50%,#dbdbdb 50%);
		background-size: 100% 1px;
		background-repeat: no-repeat;
		background-position: left bottom;

		.arrival-time {
			color: #42b983;
			font-size: 20px;
			margin: 0;
			padding: 20px 40px 0;
		}
		.time {
			color: rgba(102,102,102,0.6);
			font-size: 16px;
			margin: 0;
			padding: 20px 40px;
		}
	}
</style>