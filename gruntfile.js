module.exports = function (grunt) {
	// Configuration.
	grunt.initConfig({
		grunticon: {
			myIcon: {
				files: [{
					expand: true,
					cwd: 'src/svgs',
					src: ['*.svg', '*.png'],
					dest: "dist/vector"
				}],
				options: {
					loadersnippet: "grunticon.loader.js",
					defaultWidth: "24px",
					defaultHeight: "24px",
					previewTemplate: "src/myicon.hbs",
					cssprefix: ".mi-",
					enhanceSVG: true,
					datasvgcss: 'mi.svg.css',
					datapngcss: 'mi.png.css',
					urlpngcss:	'mi.img.css',
					previewhtml: 'MyIcon.html',
					loadersnippet: 'mi.loader.js'
				}
			}
		},
		webfont: {
			myIcon: {
				src: 'src/svgs/*.svg',
				dest: 'dist/webfont',
				options: {
					//engine: "node", // Don't use node, it always fails to render svgo optimized vectors
					font: "MyIcon",
					syntax: "bootstrap",
					templateOptions: {
						classPrefix: 'mi-'
					}
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-webfont');
	grunt.registerTask('default', ['grunticon:myIcon', 'webfont:myIcon']);
};