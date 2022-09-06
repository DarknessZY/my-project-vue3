<template>
    <view class="orderList">
        <view v-if="ordeList.length == 0">

        </view>
        <view class="orderListCard" v-for="(item,index) in ordeList" :key="index">
            <view class="orderLeft">
                <view class="orderInfo">
                    <view>
                        <text class="orderNum">订单号：{{item.orderNum}}</text>
                    </view>
                    <view class="orderStatus">
                        <text class="status" >{{item.orderState}}</text>
                    </view>
                </view>
                <view class="orderDate">
                    <text>{{item.createTime}}</text>
                </view>
            </view>
            <view class="orderRight">
                <view>
                    <view>
                        <text>到账:</text>
                        <text>￥{{item.turnover}}</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'
    const props = defineProps({
        orderList: {
            type:Array,
            default () {
                return []
            }
        }
    })
    watch(
        () => props.orderList,
        (val) =>{
            console.log('新值',val)
            ordeList.value = val
        },
        {
            deep:true
        }
    )
    const ordeList:any = ref(props.orderList)
</script>

<style scoped lang="scss">
.orderList {
    width: 750rpx;
    background: #F1F3FA;
    display: flex;
    flex-direction: column;
    .orderListCard {
        margin: 0rpx 30rpx 20px 30rpx;
        width: 690rpx;
        height: 157rpx;
        background: #FFFFFF;
        border-radius: 14rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .orderLeft {
            margin-left: 30rpx;
            .orderInfo{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .orderNum {
                width: 290rpx;
                height: 37rpx;
                font-size: 26rpx;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #212034;
                line-height: 37rpx;
            }
            .orderStatus {
                width: 84rpx;
                height: 38rpx;
                background: #FFF1E5;
                border-radius: 4rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 12rpx;
                .status {
                    width: 60rpx;
                    height: 28rpx;
                    font-size: 20rpx;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FB7902;
                    line-height: 28rpx;
                }
            }
            .orderDate {
                width: 220rpx;
                height: 30rpx;
                font-size: 22rpx;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #8A90A3;
                line-height: 30rpx;
                margin-top: 14rpx;
            }
        }
        .orderRight {
            margin-right: 30rpx;
        }
    }
}
</style>