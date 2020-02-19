<template>
    <div>
    <NavBar class="home-nav">
      <div slot="center">靓衣街</div>
    </NavBar>

    <HomeSwiper :cbanner="banners"></HomeSwiper>
    <RecommendView :crecommend="recommend"></RecommendView>
    <FeaterView></FeaterView>
    <TabControl :title="title"></TabControl>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from './childcomps/RecommendView'
import FeaterView from './childcomps/FeaterView'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from "network/home";
export default {
    name: "Home",
    data() {
      return {
        banners: null,
        recommend: null,
        title:['流行','新款','精选']
      }
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeaterView,
        TabControl
    },
    created(){
      getHomeMultidata().then(res=>{
        console.log("res",res)
        this.banners = res.banner.list
        this.recommend = res.recommend.list
      })
    },

    methods:{

    }
}
</script>

<style  scoped>
  .home-nav{
    background-color:deeppink;
    color: #fff;
  }
</style>