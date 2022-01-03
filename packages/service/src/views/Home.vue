<template>
	<div class="home">
		<HelloWorld msg="Welcome to PPURIO" />
		<Halo msg="@app/core/Halo.vue"></Halo>
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
