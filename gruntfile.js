module.exports = function(grunt) {
	// Configuration.
	grunt.initConfig({
		grunticon: {
			myIcon: {
					files: [{
						expand: true,
						cwd: 'src/svgs',
						src: ['*.svg', '*.png'],
						dest: "dist"
					}],
				options: {
					loadersnippet: "grunticon.loader.js",
					defaultWidth: "24px",
					defaultHeight: "24px",					
					previewTemplate: "src/preview.hbs",
					cssprefix: ".icon-"
				}
			}
		},
		webfont: {
			myIcon: {
				src: 'src/svgs/*.svg',
				dest: 'dist/fonts',
				options: {
					engine: "node"
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-webfont');
	grunt.registerTask('default', ['grunticon:myIcon','webfont:myIcon']);
};