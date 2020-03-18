<template>
    <div>
        <nav class="nav-bar nav-bar-tab">
             <navindex path="/index" class="nav-tab-item "></navindex>
             <navchat path="/chatrecord" class="nav-tab-item "></navchat>
             <navcont path="/contact" class="nav-tab-item "></navcont>
             <navuspu path="/userPu" class="nav-tab-item "></navuspu>
        </nav>
    </div>
</template>

<script>
    import navindex from '@/components/nav/navindex'
    import navchat from '@/components/nav/navchat'
    import navcont from '@/components/nav/navcont'
    import navuspu from '@/components/nav/navuspu'
    export default {
        name: "Nav", data() {
            return{

            }
        },
        components:{
        navindex,navchat,navcont,navuspu
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