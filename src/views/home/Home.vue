<template>
    <div>
    <NavBar class="home-nav">
      <div slot="center">靓衣街</div>
    </NavBar>

    <HomeSwiper :cbanner="banners"></HomeSwiper>
    <RecommendView :crecommend="recommend"></RecommendView>
    <FeaterView></FeaterView>
    <TabControl :title="title" @tabClick="tabClick"></TabControl>
    <GoodsLists :goods='showGoods'></GoodsLists>
    <!-- {{goods["pop"].list}} -->

    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from './childcomps/RecommendView'
import FeaterView from './childcomps/FeaterView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsLists from 'components/content/goods/GoodsLists'

import {getHomeMultidata,getHomeGoods} from "network/home";
export default {
    name: "Home",
    data() {
      return {
        banners: null,
        recommend: null,
        title:['流行','新款','精选'],
        goods:{
          "pop":{page: 0,list:[]},
          "new":{page: 0,list:[]},
          "sell": {page: 0,list:[]}
        },
        currentType: 'pop'
      }
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeaterView,
        TabControl,
        GoodsLists
    },
    created(){
      this.getHomeMultidata(),
      this.getHomeGoods("pop"),
      this.getHomeGoods("sell"),
      this.getHomeGoods("new")
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },

    methods:{
      tabClick(index){
        console.log(index)
          switch(index){
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = "sell";
            break
        }
      },







      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        console.log("res",res)
        this.banners = res.banner.list
        this.recommend = res.recommend.list
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          console.log("Goods",res)
          this.goods[type].list.push(...res.list)
          this.goods[type].page += 1;
        })
      }
    },
}
</script>

<style  scoped>
  .home-nav{
    background-color:deeppink;
    color: #fff;
  }
</style>