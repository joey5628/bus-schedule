<template>
  <nav class="nav-bar">
    <ul>
      <li class="col col-50" v-for="way in ways" @click="actionChangeWay(way)" 
        :class="{active: way.direction == stateWay.direction}">
        <a href="javascript:;">{{way.start.name}} - {{way.end.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {changeWay} from '../vuex/actions.js'
import {getWay} from '../vuex/getters'

export default {
  data () {
    return {
      ways: [
        {
          direction: 'north',
          start: {
            stopid: 13,
            name: '新家园路'
          },
          end: {
            stopid: 15,
            name: '佘山地铁站'
          }
        },
        {
          direction: 'south',
          start: {
            stopid: 12,
            name: '佘山地铁站'
          },
          end: {
            stopid: 14,
            name: '新家园路'
          }
        }
      ]
    }
  },

  vuex: {
    actions: {
      actionChangeWay: changeWay
    },
    getters: {
      stateWay: getWay
    }
  }
}
</script>


<style lang="less">
  .nav-bar {
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
        }
        &.active a{
          border-bottom: 1px solid #42b983;
          box-shadow: 0 0 4px rgba(66,185,131,0.25);
        }
      }
    }
  }

</style>