<template>
	<nav class="nav-bar">
		<ul>
			<li class="col col-50">
				<a href="javascript:;" class="active">新家园路 - 佘山地铁站</a>
			</li>
			<li class="col col-50">
				<a href="javascript:;">佘山地铁站 - 新家园路</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
  data () {
    return {
      name: 'nav-bar'
    }
  }
}
</script>


<style lang="less">
	.nav-bar {
		// background-color: #dbdbdb;
		margin-top: 44px;
		height: 44px;
		ul{
			width: 100%;
			height: 100%;
			display: flex;
			box-shadow: 0 0 4px rgba(0,0,0,0.25);
			li{
				a{
					width: 100%;
					height: 100%;
					display: inline-block;
					background-image: linear-gradient(to right,transparent 50%,#dbdbdb 50%);
		      background-size: 1px 100%;
		      background-position: right top;
		      background-repeat: no-repeat;
		      line-height: 44px;
		      color: #333;
		      text-align: center;
		      text-decoration: none;
		      &.active{
		      	border-bottom: 1px solid #42b983;
		      	box-shadow: 0 0 4px rgba(66,185,131,0.25);
		      }
				}
			}
		}
	}

</style>