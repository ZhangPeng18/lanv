<template>
  <div id="app">
    <router-view></router-view>
    <Nav></Nav>
  </div>
</template>
<script>
  import Nav from '@/components/Nav'
  import index from '@/components/index'
  import chatrecord from '@/components/chatrecord'
  import contact from '@/components/contact'
  import userPu from '@/components/userPu'
  export default {
    name:'App',
    data() {
      return{

      }
    },
    components:{
     index, Nav,chatrecord,contact,userPu
    },
    methods:{

    }
  }


</script>

<style>
@import "~@/assets/fonts/iconfont.css";
</style>