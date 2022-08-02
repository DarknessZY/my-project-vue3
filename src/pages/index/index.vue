<template>
    <!-- 自定义顶部栏 （在全局注册了）-->
    <cu-custom bgColor="bg-gradual-blue" :isBack="false">
        <block slot="content">首页</block>
    </cu-custom>
    <!-- 轮播图 -->
    <card-swiper :swiperList="swiperList"></card-swiper>
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
</style>
