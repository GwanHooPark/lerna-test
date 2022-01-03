<template>
	<div style="border: 1px solid green">
		<h1>{{ msg }}</h1>
		<div>Halo 파일 내용부분</div>
	</div>
</template>

<script>
export default {
	name: 'Halo',
	props: {
		msg: String,
	},
};
</script>
