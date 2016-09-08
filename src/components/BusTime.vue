<template>
  <div class="bus-time">
    <p class="station-name">{{stationName}}</p>
    <p class="arrival-time">{{arrivalTime}}</p>
    <p class="time">当前时间：{{time}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stationName: '新家园路',
      arrivalTime: '沪D-C2366 还有4站，约5分钟',
      time: '6:31'
    }
  }
}
</script>

<style lang="less">
  @import '../assets/common.less';

  .bus-time {
    .half-line(bottom, left, bottom, 100%, 1px);
    .station-name {
      color: @green;
      margin: 0px;
      padding: 20px;
    }
    .arrival-time {
      color: @green;
      font-size: 18px;
      margin: 0;
      padding: 0 40px;
    }
    .time {
      color: @gray;
      margin: 0;
      padding: 20px 40px;
    }
  }
</style>