<template>
    <!-- 自定义顶部栏 （在全局注册了）-->
    <cu-custom bgColor="bg-gradual-blue" :isBack="false" :bgImage="myBg">
        <block slot="content">首页</block>
    </cu-custom>
    <h1>我是首页</h1>
    <trading-data :trading-background="tradingBackground" :incomeNumber="incomeNumber" :volume="volume"> </trading-data>
    <order-list :orderList ='List'></order-list>
</template>

<script setup lang="ts">
import tradingData from '@/components/tradingData.vue'
import orderList from '@/components/orderList.vue'
const tradingBackground = ref('/static/tradingDataBg.png')
const incomeNumber = ref(19807.00)
const volume = ref(35)
const myBg = ref('/static/mybg.png')
const List = ref([
    {
        orderNum:'12939021311SS',
        orderState:'已放款',
        turnover:'88.82',
        createTime:'2021-06-21 07:35:57'
    },
    {
        orderNum:'123154651',
        orderState:'已放款',
        turnover:'88.82',
        createTime:'2021-06-21 15:12:57'
    }
])
</script>

<style scoped lang="scss">

.tradingData {
    z-index: 999;
    margin: 30rpx 31rpx 0 29rpx;
    background: linear-gradient(159deg, #7486FC 0%, #5368EF 100%);
    border-radius: 14rpx;
    height: 200rpx;
    width: 690rpx;
    display: flex;
    align-items: center;
    justify-content: center;

    .income {
        flex: 1;
        margin-left: 29rpx;
    }
    .jyval {
        flex: 1;
        display: flex;
        align-items: center;
        .line {
            width: 1rpx;
            height: 79rpx;
            border-right: solid white 1rpx;
            margin-left: 27rpx;
            opacity: 30%;
        }
        .jy {
            margin-left: 47rpx;
        }
    }
}
.text {
    font-size: 26rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 37rpx;
}

.textNumber {
    font-size: 48rpx;
    font-family: DIN-Medium, DIN;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 58rpx;
    margin-top: 12rpx;
}
</style>