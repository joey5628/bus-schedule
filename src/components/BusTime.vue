<template>
  <div class="bus-time">
    <p class="station-name">{{name}}</p>
    <p class="arrival-time">{{arrivalTime}}</p>
    <p class="time">当前时间：{{time}}</p>
  </div>
</template>

<script>
// import busService from '../services/busService'
import {getWay} from '../vuex/getters'

export default {
  data () {
    return {
      stopid: 13,
      name: '新家园路',
      arrivalTime: '',
      time: ''
    }
  },

  vuex: {
    getters: {
      way: getWay
    }
  },

  watch: {
    'way': function (val) {
      this.stopid = val.start.stopid
      this.name = val.start.name
    }
  },

  methods: {
    getTime: function (way) {
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