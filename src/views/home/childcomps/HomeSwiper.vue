<template>
    <div>
        <Swiper>
            <SwiperItem v-for="item in cbanner">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </SwiperItem>
        </Swiper> 
    </div>
</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper'

export default {
    name: 'HomeSwiper',
    data() {
        return {
            
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        cbanner:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>