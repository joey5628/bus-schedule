<template>
	<header>
		<strong>{{title}}</strong>		
	</header>
</template>

<script>
export default {
  data () {
    return {
      title: '查查查我的公交'
    }
  }
}
</script>

<style lang="less">
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		// border-bottom: 1px solid #ddd;
		height: 44px;
		line-height: 44px;
		text-align: center;
		margin: 0 2px;
		box-shadow: 0 0 4px rgba(0,0,0,0.25);

		strong {
			color: #42b983;
			font-size: 18px;
			font-weight: 500;
		}
	}
</style>