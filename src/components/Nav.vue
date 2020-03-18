<template>
    <div>
        <nav class="nav-bar nav-bar-tab">
            <a class="nav-tab-item " href="#/index" >
                <span class=" nav-icon  icon-uniE90A"></span>
                <span class="nav-tab-label">首页</span>
            </a>
            <a href="#/contact"  class="nav-tab-item" >
                <span class="nav-icon  icon-uniE919"></span>
                <span class="nav-tab-label">通讯录</span>
            </a>
            <a href="#/chatrecord" class="nav-tab-item" >
                <span class="nav-icon icon-uniE903"><span class="nav-badge">1</span></span>
                <span class="nav-tab-label">消息</span>
            </a>
            <a href="#/userPu" class="nav-tab-item"  >
                <span class="nav-icon icon-uniE90B"></span>
                <span class="nav-tab-label">我的</span>
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Nav", data() {
            return{

            }
        },
        components:{

        },
        methods:{


        },
        computed: {

            // computed擅长处理的场景：一个数据受多个数据影响
            //computed是计算属性，也就是依赖其它的属性计算所得出最后的值

    }

    }
</script>

<style scoped>
    @import "~@/css/index.css";
    @import "~@/css/bass.css";
    @import "~@/assets/fonts/iconfont.css";
</style>