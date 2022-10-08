<template>
     <view class="tradingData" :style="{backgroundImage: 'url(' + tradingBackground + ')',backgroundRepeat: 'no-repeat',backgroundSize:'cover'}">
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
                    <!-- 竖线 -->
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
    incomeNumber: {
        type:Number,
        default:''
    },
    volume: {
        type:Number,
        default:''
    }
})
const todayIncome = computed(() =>{
    return Number(Number(props.incomeNumber).toFixed(2)).toLocaleString( "en", { minimumFractionDigits: 2 })
})
</script>

<style scoped lang="scss">

.tradingData {
    height: 201rpx;
    width: 691rpx;
    z-index: 999;
    margin: 30rpx 31rpx 0 29rpx;
    border-radius: 14rpx;
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
            border-right: solid #FFFFFF 1rpx;
            margin-left: 10rpx;
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
    text-align: left;
}
</style>