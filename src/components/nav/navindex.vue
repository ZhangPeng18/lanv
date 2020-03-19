<template>
    <div>
        <router-link :class="{nav_active: !isActive}" class="nav-tab-item " to="/index"  replace >
            <span class=" nav-icon  icon-uniE90A"></span>
            <span class="nav-tab-label">首页</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "navindex",
        props:{
            path:String
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)
            }
        }
    }
</script>

<style scoped>

</style>