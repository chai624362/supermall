<template>
    <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in banners" :key="item.image">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name,Swipe)
    Vue.component(SwipeItem.name,SwipeItem)
    export default {
        name: "Swipe",
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
        },
    }
</script>

<style scoped>
    .mint-swipe-item img{
        width: 100%;
        height: 166px;
    }
</style>