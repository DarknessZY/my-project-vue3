<template>
<view class="login_content">
    <swiper class="card-swiper round-dot" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff" previous-margin="1rpx" >
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''" >
				<view class="swiper-item" >
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
	</swiper>
</view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app';
import { ref ,reactive ,defineProps} from 'vue';
import {swiperType} from '@/utils/Types/imgTypes'

    const cardCur =ref(0)
    const fatherData = defineProps({
        swiperList: {
            type:Array,
            default: [
                {
                    id: 0,
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
                },
                {
                    id: 1,
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
                },
                {
                    id: 2,
                    type: 'image',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
                }
            ]
        }
    })
    let swiperList:Array<swiperType>= reactive(fatherData.swiperList)
    const cardSwiper =(e:any)=>{
        // console.log('轮播图下标',e.detail.current);
        cardCur.value =e.detail.current
    }
    const TowerSwiper = ()=>{
        let list = swiperList
        console.log(list)
        for (let i = 0; i < list.length; i++) {
            list[i].zIndex = list.length/2 + 1 - (i - (list.length / 2))
            list[i].mLeft = i - list.length / 2
        }
        swiperList = list
    }
    onShow(() => {
        TowerSwiper()
    });
</script>
<style lang="scss">
</style>