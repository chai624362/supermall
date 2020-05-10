<template>
    <TbaBar>
        <tab-bar-item link='/home'>
            <span slot='item-icon' class="mui-icon mui-icon-home"></span>
            <div slot='item-text'>首页</div>
        </tab-bar-item>
        <tab-bar-item link='/catee'>
            <span slot='item-icon' class="mui-icon-extra mui-icon-extra-dictionary"></span>
            <div slot='item-text'>分类</div>
        </tab-bar-item>
        <tab-bar-item link='/cart'>
            <span slot='item-icon' class="mui-icon-extra mui-icon-extra-cart"></span>
            <div slot='item-text'>购物车</div>
        </tab-bar-item>
        <tab-bar-item link='/profile'>
            <span slot='item-icon' class="mui-icon mui-icon-contact"></span>
            <div slot='item-text'>我的</div>
        </tab-bar-item>
    </TbaBar>
</template>

<script>
    import TbaBar from '../../common/tabbar/TabBar'
    import TabBarItem from '../../common/tabbar/TabBarItem'
    import '../../../lib/mui/css/icons-extra.css'
    import '../../../lib/mui/css/mui.css'

    export default {
        name: "MainTabbar",
        components:{
            TbaBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>