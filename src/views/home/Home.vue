<template>
  <div class="home">
    <div class="header">
      <Header></Header>
    </div>
    <div>
      <Swipe :banners="banners"></Swipe>
    </div>
    <div>
      <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    </div>
    <div class="feature">
      <FeatureView></FeatureView>
    </div>
    <div class="nav-control">
      <Grid></Grid>
<!--      <HomeNavbar ></HomeNavbar>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../../components/content/header/Header";
import Swipe from "./childComps/Swipe"
import HomeRecommendView from "./childComps/HomeRecommendView";
import Grid from "./childComps/Grid";
// import HomeNavbar from "./childComps/HomeNavbar";
import FeatureView from "./childComps/FeatureView";
import {getHomeMultidata,getHomeGoods} from "../../network/home";


export default {
  name: 'Home',
  data(){
    return{
      banners:[],
      recommends : [],
      goods:{
        pop:{
          page:0,
          list:[]
        },
        news:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        }
      }
    }
  },
  components: {
    Header,
    Swipe,
    HomeRecommendView,
    FeatureView,
    Grid
    // HomeNavbar
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()

    this.getHomeGoods('pop')
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends=res.data.data.recommend.list;
      },error => {
        console.log(error);
      });
    },
    getHomeGoods(type){
      // const page = this.goods[type].page+1
      // getHomeGoods(type,page).then( res => {
      //   this.goods[type].list.push(...res.data);
      //   console.log(res);
      // })
    }
  }
}
</script>
<style>
  .header {
    padding: 20px;
  }

  #header a {
    font-weight: bold;
    color: #2c3e50;
  }

  #header a.router-link-exact-active {
    color: #42b983;
  }
  .mint-swipe{
    height: 166px;
  }
  .feature img{
    width: 100%;
    height: 250px;
  }
  .nav-control div:first-child{
    position: sticky;
    top: 40px;
  }
</style>
