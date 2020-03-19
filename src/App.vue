<template>
  <div id="app">
    <router-view></router-view>
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from '@/components/Nav'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Nav
  },
  methods: {}
}
</script>
