<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="styleALL" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
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
		isBack: {
			type: [Boolean, String],
			default: false
		},
		bgImage: {
			type: String,
			default: ''
		},
	})

	
const StatusBar = ref(uni.getSystemInfoSync().statusBarHeight)
const { top, bottom} = uni.getMenuButtonBoundingClientRect()
const CustomBar = ref(top+bottom-StatusBar.value)
const styleALL = computed(() => {
	console.log('StatusBar的ref',StatusBar.value)
	var Custom = CustomBar.value
	var Status = StatusBar.value
	var bgImage = props.bgImage
	var style = `height:${Custom}px;padding-top:${Status}px;`
	if (bgImage) {
		style = `${style}background-image:url(${bgImage});`
	}
	return style
})
	
	const BackPage =()=>{
		uni.navigateBack({ delta: 1 })
	}
</script>

<style>

</style>
