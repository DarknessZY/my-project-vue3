<template>
     <view class="tradingData" :style="{background:tradingBackground}">
           <view class="income">
                <view >
                    <view class="text">&nbsp;今日收入</view>
                </view>
                <view>
                    <view class="textNumber ">￥{{todayIncome}}</view>
                </view>
           </view>
           <view class="jyval">
                <view class="line">

                </view>
                <view class="jy">
                    <view>
                        <view class="text">交易笔数</view>
                    </view>
                    <view>
                        <view class="textNumber">{{volume}}</view>
                    </view>
                </view>
           </view>  
        </view>
</template>

<script setup lang="ts">
const props = defineProps({
    tradingBackground: {
        type: String,
        default: ''
    },
})
const incomeNumber = ref('19807.00')
const todayIncome = computed(() =>{
    return Number(incomeNumber.value).toFixed(2).toLocaleString()
})
const volume = ref(35)
</script>

<style scoped lang="scss">

.tradingData {
    z-index: 999;
    margin: 30rpx 31rpx 0 29rpx;
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
    text-align: left;
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