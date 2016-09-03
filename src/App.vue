<template>
  <div id="app">
    <!-- <header></header> -->
    <vue-header></vue-header>
    <vue-nav></vue-nav>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import VueHeader from './components/VueHeader'
import VueNav from './components/VueNav'

export default {
  components: {
    VueHeader,
    VueNav,
    Hello
  }
}
</script>

<style>

</style>
