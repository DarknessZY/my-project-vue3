<template>
    <!-- 自定义顶部栏 （在全局注册了）-->
    <cu-custom bgColor="bg-gradual-blue" :isBack="false">
        <block slot="content">首页</block>
    </cu-custom>
    <!-- 轮播图 -->
    <card-swiper :swiperList="swiperList"></card-swiper>
    <!-- 产品品展示 -->
    <view class="text-show">
        <h1 class="text-active">产品展示</h1>
        <text class="text-no">PRODUCT DISPLAY</text>
    </view>
    <!-- 小卡片 -->
    <view class="cardlayout">
    <view class="bg-img bg-mask flex align-center"
        style="background-image: url('@/static/lizi.png');background-size:200rpx;border-radius:10%">
        <view class="padding-xl text-white">
            <view class="padding-xs text-xxl text-bold">
                鞋垫
            </view>
        </view>
    </view>
    <view class="bg-img bg-mask flex align-center"
        style="background-image: url('@/static/lizi.png');background-size:200rpx;border-radius:10%">
        <view class="padding-xl text-white">
            <view class="padding-xs text-xxl text-bold">
                矫形器
            </view>
        </view>
    </view>
    </view>
    <!-- 底部导航 -->
    <tabbar></tabbar>
</template>

<script setup lang="ts">
import cardSwiper from '@/components/cardSwiper.vue'
import tabbar from '@/components/tabbar.vue'
import { ref ,reactive } from 'vue';
const swiperList = reactive([
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
])
</script>

<style lang="scss">

pages {
    width: 100%;
    height: 100%;
    background-color: #e9e7e7;
}

.text-show {
    width: 100%;
    margin-top: 40rpx;
    margin-bottom: 40rpx;
}
.text-active {
    color: #353535;
    font-weight: bold;
    margin-bottom: 8rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}


.text-no {
    color: #999999;
    font-size: 30rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cardlayout{
    display: flex;
    justify-content: space-around;
}
</style>
