<template>
  <nav class="nav-bar">
    <ul>
      <li class="col col-50" v-for="way in ways" @click="changeWay(way)" :class="{active: way.isSelected}">
        <a href="javascript:;">{{way.start.name}} - {{way.end.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {changeWay} from '../vuex/actions.js'

export default {
  data () {
    return {
      ways: [
        {
          direction: 'north',
          isSelected: true,
          start: {
            id: 0,
            name: '新家园路'
          },
          end: {
            id: 1,
            name: '佘山地铁站'
          }
        },
        {
          direction: 'south',
          isSelected: false,
          start: {
            id: 1,
            name: '佘山地铁站'
          },
          end: {
            id: 0,
            name: '新家园路'
          }
        }
      ]
    }
  },

  methods: {

    // 切换tab
    changeWay: function (way) {
      console.log(way)
      this.removeSelected()
      this.addSelected(way)
      this.actionChangeWay(way.direction)
    },

    // 删除之前已选中的tab
    removeSelected: function () {
      this.ways.forEach((item) => {
        item.isSelected = false
      })
    },

    // 选中一个tab
    addSelected: function (way) {
      way.isSelected = true
    }
  },
  vuex: {
    actions: {
      actionChangeWay: changeWay
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