<template>
    <div>
        <a href="#/userPu" :class="{nav_active: !isActive}" class="nav-tab-item"  >
            <span class="nav-icon icon-uniE90B"></span>
            <span class="nav-tab-label">我的</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "navuspu",
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