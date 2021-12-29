<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<Halo msg="core package halo~~~"></Halo>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Halo from '@apps/core/components/Halo.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld,
		Halo,
	},
};
</script>
