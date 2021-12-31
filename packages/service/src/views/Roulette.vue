<template>
	<div>
		<div class="roulette-outer">
			<div class="roulette-pin"></div>
			<div class="roulette" :style="rouletteRotateAngle">
				<!-- 값 영역 -->
				<div class="item-wrapper">
					<div
						class="item"
						:style="itemStyles[index]"
						v-for="(item, index) in items"
						:key="index"
					>
						{{ item.value }}
					</div>
				</div>
				<!-- 선영역 -->
				<div class="line-wrapper">
					<div
						class="line"
						:style="lineStyles[index]"
						v-for="(item, index) in items"
						:key="index"
					></div>
				</div>
			</div>
		</div>
		<button @click="play()" :disabled="disableButton">play</button>
		<div>
			원하는 결과 :
			<select v-model="wantResult">
				<option value="-1">랜덤</option>
				<option v-for="(item, index) in items" :key="index" :value="index">
					{{ item.value }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ value: '100점' },
				{ value: '200점' },
				{ value: '300점' },
				{ value: '10점' },
				{ value: '-10점' },
			],
			itemStyles: [],
			lineStyles: [],
			current: 0,
			count: 0,
			disableButton: false,
			wantResult: -1,
		};
	},
	computed: {
		segment() {
			return 360 / this.items.length;
		},
		offset() {
			return this.segment / 2;
		},
		angle() {
			const temp = this.current * this.segment;
			const randomOffset =
				Math.floor(Math.random() * this.segment) - this.offset - 1;
			const cycle = this.count * 360 * 5;
			return -(temp + randomOffset + cycle);
		},
		rouletteRotateAngle() {
			return {
				transform: `rotate(${this.angle}deg)`,
			};
		},
	},
	mounted() {
		this.drawRoulette();
	},
	methods: {
		drawRoulette() {
			this.items.forEach((el, idx) => {
				this.itemStyles.push({
					transform: `rotate(${this.segment * idx}deg)`,
				});
				this.lineStyles.push({
					transform: `rotate(${this.segment * idx + this.offset}deg)`,
				});
			});
		},
		play() {
			this.count++;
			this.current =
				this.wantResult < 0
					? Math.floor(Math.random() * this.items.length)
					: this.wantResult;
			this.disableButton = true;
			setTimeout(() => {
				this.disableButton = false;
			}, 5000);
		},
	},
};
</script>

<style scoped>
.roulette-outer {
	position: relative;
	overflow: hidden;
	width: 500px;
	height: 500px;
	font-size: 30px;
	margin-left: auto;
	margin-right: auto;
}
.roulette-outer > .roulette {
	position: absolute;
	top: 5%;
	left: 5%;
	right: 5%;
	bottom: 5%;
	border-radius: 50%;
	border: 2px solid black;
}
.roulette-outer > .roulette-pin {
	position: absolute;
	top: 3%;
	left: 50%;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 25px 5px 0 5px;
	border-color: #ff0000 transparent transparent transparent;
	margin-left: -5px;
}
.roulette-outer > .roulette > .item-wrapper > .item {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding-top: 10%;
	text-align: center;
	display: flex;
	justify-content: center;
}
.roulette-outer > .roulette > .line-wrapper > .line {
	position: absolute;
	top: 0;
	bottom: 50%;
	left: 50%;
	width: 2px;
	margin-left: -1px;
	background: black;
	transform-origin: bottom;
}
.roulette-outer > .roulette {
	transition: transform 5s ease-in-out;
}
</style>
