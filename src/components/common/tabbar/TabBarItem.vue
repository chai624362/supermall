<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :class="{active : isActive}">
      <slot  name="item-icon"></slot>
    </div>
    <div :class="{active : isActive}">
      <slot  name="item-text"></slot>
    </div>
<!--    <img src="../../../build/logo.png" alt="">
    <div>首页</div> -->
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    props:{
      link:String
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link) != -1
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item span{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .active{
    color: #26a2ff;
  }
</style>
