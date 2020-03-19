<template>
    <div>
        <router-link to="/chatrecord"  replace :class="{nav_active: !isActive}" class="nav-tab-item" >
            <span class="nav-icon icon-uniE903"><span class="nav-badge">1</span></span>
            <span class="nav-tab-label">消息</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "navchat",
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