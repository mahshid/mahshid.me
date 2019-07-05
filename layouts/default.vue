<template>
	<div class="container-fluid">
		<div class="row main-wrapper">
			<LeftSection />
			<nuxt />
		</div>
	</div>
</template>

<script>
	import LeftSection from '@/components/LeftSection';
	export default {
		components: {
			LeftSection
		}
	}
</script>
