<template>
	<div class="station-list">
		<ul>
			<li class="station-item" v-for="(index, station) in stations">
				<p>
					<span>{{index + 1}}. {{station.name}}</span>
					<i class="icon-angle-down"></i>
				</p>
				<p class="time">{{station.arrivalTime}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	stations: [
    		{
    			id: 0,
    			name: '新家园路',
    			arrivalTime: '沪D-C2366 还有4站，约5分钟'
    		},{
    			id: 1,
    			name: '米兰地产',
    			arrivalTime: '沪D-C2366 还有4站，约5分钟'
    		},{
    			id: 2,
    			name: '佘山地铁站',
    			arrivalTime: '沪D-C2366 还有4站，约5分钟'
    		}
    	]
    }
  }
}
</script>

<style lang="less">
	@import '../assets/common.less';
	
	.station-list {
		.station-item {
			padding: 15px 40px;
			font-size: 16px;
			.half-line();
			.icon-angle-down{
				color: @green;
				font-size: 20px;
				float: right;
				vertical-align: middle;
				transition: all 0s ease 1s;	
			}
			&.open .icon-angle-down{
				transform: rotate(180deg);
			}
			p{
				margin: 0;
			}
			.time{
				color: @green;
				font-size: 14px;
				padding: 10px 17px 0;
			}
		}
	}

</style>