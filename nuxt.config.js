export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || 'Mahshid Hajiani | مهشید حاجیانی',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: process.env.npm_package_description || 'Diligent full-stack web developer, who is very familiar and experienced with Web Application Architecture and have worked with a good number of successful development teams.'}
		],
		link: [
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pacifico'},
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cantarell'}
		],
		script: [
			{src: "/js/jquery.min.js", type: "text/javascript", body: true},
			{src: "/js/popper.min.js", type: "text/javascript", body: true},
			{src: "/js/bootstrap.min.js", type: "text/javascript", body: true},
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#ffffff'},
	/*
	** Global CSS
	*/
	css: [
		'~/assets/scss/app.scss',
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{ src: '~plugins/ga.js', ssr: false }
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		[
			'nuxt-fontawesome',
			{
				imports: [
					{
						set: '@fortawesome/free-solid-svg-icons',
						icons: ['fas']
					},
					{
						set: '@fortawesome/free-brands-svg-icons',
						icons: ['fab']
					}
				]
			}
		],
		['@nuxtjs/google-analytics', {
			id: 'UA-111180851-1'
		}]
	],
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extractCSS: {
			allChunks: true
		},
		extend(config, ctx)
		{
		}
	}
}
