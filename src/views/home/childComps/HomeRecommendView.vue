<template>
    <div class="recommends">
        <div v-for="item in recommends" :key="recommends.image" class="recommend-img">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .recommends{
        display: flex;
        width: 100%;
        font-size: 14px;
        padding: 10px 0px 15px;
        border-bottom: 5px solid #dab3b3;
    }
    .recommend-img{
        flex: 1;
        text-align: center;
    }
    .recommend-img img{
        width: 90%;
        height: auto;
    }
</style>