module.exports = (grunt) => {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,copy: {
			lib: {
				files: [
					{expand: true, cwd: 'node_modules/github-markdown-css/', src: ['github-markdown.css'], dest: 'static/css/lib/github-markdown-css/'}
					,{expand: true, cwd: 'node_modules/d3/', src: ['build/d3.min.js','img'], dest: 'static/js/lib/d3/'}
				]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.registerTask('default', ['copy']);
}