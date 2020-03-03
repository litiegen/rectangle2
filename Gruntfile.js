module.exports = function (grunt) {
  grunt.initConfig({
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['*.css']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: ['*.html']
    }
  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['htmlhint']);
  grunt.registerTask('default', ['csslint']);
  grunt.registerTask('default', ['eslint']);
};