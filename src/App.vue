<template>
  <div id="app">
    <vue-header></vue-header>
    <vue-nav></vue-nav>
    <div class="container">
      <bus-time></bus-time>
      <station-list></station-list>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import VueHeader from './components/VueHeader'
import VueNav from './components/VueNav'
import BusTime from './components/BusTime'
import StationList from './components/StationList'

export default {
  components: {
    VueHeader,
    VueNav,
    BusTime,
    StationList
  },
  store
}
</script>

<style>

</style>
