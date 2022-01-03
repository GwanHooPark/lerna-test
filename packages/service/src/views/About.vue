<template>
	<div class="about">
		<h1>공통 root/bootstrap</h1>
		<b-button @click="clickButton()">버튼</b-button>
	</div>
</template>
<script>
import { alertCore } from '@apps/core/lib/alertCore.js';
export default {
	name: 'About',
	methods: {
		clickButton() {
			alertCore('@apps/core/lib/alertCore.js');
		},
	},
};
</script>
