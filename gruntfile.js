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
		}
	});
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.registerTask('default', ['grunticon:myIcon']);
};