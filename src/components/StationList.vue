<template>
  <div class="station-list">
    <p>
      {{way}}
    </p>
    <ul>
      <li class="station-item" v-for="(index, station) in stations">
        <p>
          <span>{{index + 1}}. {{station.name}}</span>
          <i class="icon-angle-down"></i>
        </p>
        <p class="info">{{station.info}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import busService from '../services/busService'
import stationsData from '../mock/stationList.js'
// import {getWay} from '../vuex/getters'

export default {
  data () {
    return {
      stations: []
    }
  },

  ready () {
    this.stations = stationsData[this.way]
  },

  watch: {
    'way': function (val) {
      this.stations = stationsData[val]
    }
  },

  vuex: {
    getters: {
      way: state => state.way
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
      .info{
        display: none;
        color: @green;
        font-size: 14px;
        padding: 10px 17px 0;
      }
    }
  }

</style>