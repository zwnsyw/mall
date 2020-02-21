<template>
    <div>
        <div>
            <GoodsListItem v-for="item in goods" :goods-item = "item"></GoodsListItem>

        </div>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:'GoodsLisis',
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style scope>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>