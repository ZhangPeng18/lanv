<template>
  <div>
    <nav class="nav-bar nav-bar-tab">
      <a class="nav-tab-item" :class="{active: item.active}"
         @click="change(item)" v-for="item in navList">
        <span class="nav-icon  icon-uniE90A"></span>
        <span class="nav-tab-label">{{item.name}}</span>
      </a>
    </nav>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: "Nav",
  data() {
    return {
      navList: [
        {
          path: "index",
          name: "首页",
          active: true
        },
        {
          path: "contact",
          name: "通讯录",
          active: false
        },
        {
          path: "chatrecord",
          name: "消息",
          active: false
        },
        {
          path: "userPu",
          name: "我的",
          active: false
        }
      ]
    }
  },
  methods: {
    change(item) {
      this.navList.forEach((v) => {
        v.active = item.path === v.path;
      });
      router.push(item.path);
    }
  },
  computed: {

  }

}
</script>

<style scoped>
  @import "~@/css/index.css";
  @import "~@/css/bass.css";
  @import "~@/assets/fonts/iconfont.css";
</style>
