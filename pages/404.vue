<template>
	<div class="col-12 my-md-auto col-lg-6 right-box mt-4 mt-md-auto">
		<div class="row justify-content-center align-items-center">
			<div class="col-12 col-md-9 col-lg-8">
				<div class="details py-5 text-center">
					<h1 class="text-dark">404</h1>
					<h4 class="text-dark">Page not found</h4>
					<hr>
					<div class="text-center my-2">
						<nuxt-link to="/" class="mr-3">Home</nuxt-link>
						<a href="/blog">My Blog</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		head: {
			title: '404 Not Found',
			meta: [
				{charset: 'utf-8'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			],
		}
	}
</script>
