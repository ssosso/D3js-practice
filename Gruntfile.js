module.exports = (grunt) => {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		,copy: {
			lib: {
				files: [
					{expand: true, cwd: 'node_modules/github-markdown-css/', src: ['github-markdown.css'], dest: 'static/css/lib/github-markdown-css/'}
				]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.registerTask('default', ['copy']);
}