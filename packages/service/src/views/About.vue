<template>
	<div class="about">
		<h1>This is an about page</h1>
		<b-button>버튼</b-button>
	</div>
</template>
<script>
import { core } from '@apps/core/lib/core.js';
export default {
	name: 'About',
	created() {
		console.log('about created');
		core('zzzz');
	},
};
</script>
