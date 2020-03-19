<template>
    <div>
        <router-link to="/userPu"  replace :class="{nav_active: !isActive}" class="nav-tab-item"  >
            <span class="nav-icon icon-uniE90B"></span>
            <span class="nav-tab-label">我的</span>
        </router-link>
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