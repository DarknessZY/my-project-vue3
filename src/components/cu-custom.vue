<template>
	<view>
		<view class="cu-custom" :style="{height:CustomBar + 'px'}">
			<view class="cu-bar fixed" :style="styleALL" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="{top:StatusBar + 'px'}">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref ,computed} from "vue"
	const props =defineProps({
		bgColor: {
			type: String,
			default: ''
		},
		//是否显示回退图标
		isBack: {
			type: [Boolean, String],
			default: false
		},
		//如果设置了背景图片展示背景图片，否则展示背景图片
		bgImage: {
			type: String,
			default: ''
		},
	})

	
const StatusBar:any = ref(uni.getSystemInfoSync().statusBarHeight)
const { top, bottom} = uni.getMenuButtonBoundingClientRect()
const CustomBar = ref(top + bottom - StatusBar.value)
const styleALL = computed(() => {
	console.log('StatusBar的ref',StatusBar.value)
	const Custom = CustomBar.value
	const Status = StatusBar.value
	const bgImage = props.bgImage
	console.log('背景图片',bgImage);
	
	let style = `height:${Custom}px;padding-top:${Status}px;`
	if (bgImage) {
		style = `${style}background-image:url(${bgImage});`
	}
	return style
})
	//返回上一级页面
	const BackPage =()=>{
		uni.navigateBack({ delta: 1 })
	}
</script>

<style>

</style>
