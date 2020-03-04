<template>
	<div class="col-lg-6 my-md-auto right-box mt-4 mt-md-auto">
		<div class="row justify-content-center align-items-center">
			<div class="details home">
				<ul class="list-unstyled px-3">
					<li class="title-color font-weight-bold">Who:</li>
					<li>
						<a href="/">Mahshid Hajyani</a> - <a href="https://goo.gl/maps/snEaQD3cayAp5UfG6" target="_blank">London, UK</a> - Web Developer
					</li>
					<li class="mt-5 mx-sm-5">
						<a href="https://www.facebook.com/mahshid.hajiani" title="My Facebook" target="_blank">
							<font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-lg" />
						</a>

						<a href="https://twitter.com/HMahshid" title="My Twitter" target="_blank">
							<font-awesome-icon :icon="['fab', 'twitter']" class="fa-lg" />
						</a>
						<a href="https://500px.com/hajianimahshid" title="My 500px" target="_blank">
							<font-awesome-icon :icon="['fab', '500px']" class="fa-lg" />
						</a>
						<a href="https://www.instagram.com/mahshidgraph/" title="My Instagram" target="_blank">
							<font-awesome-icon :icon="['fab', 'instagram']" class="fa-lg" />
						</a>
						<a href="https://www.linkedin.com/in/mahshid-hajiani-3328a99a/" title="My Linkedin" target="_blank">
							<font-awesome-icon :icon="['fab', 'linkedin-in']" class="fa-lg" />
						</a>
					</li>
				</ul>
				<div class="text-center my-2">
					<nuxt-link to="/about" class="mr-3">About Me</nuxt-link>
					<a href="/blog">My Blog</a>
				</div>
			</div>
		</div>
	</div>
</template>
