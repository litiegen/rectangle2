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
    },

    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    },
    mocha_istanbul: {
      coverage: {
        src: 'test'
      }
    },
    istanbul_check_coverage: {
      default: {
        options: {
          coverageFolder: 'coverage*',
          check: {
            lines: 90,
            statements: 90
          }
        }
      }
    },
    mocha: {
      test: {
        src: ['test/index.html'],
      },
      options: {
        run: true,
        reporter: 'Dot'
      }
    },
    run: {
      api: {
        options: { wait: false },
        args: ['./app.js']
      }
    }




  });


  grunt.loadNpmTasks('grunt-run')
  grunt.loadNpmTasks('grunt-mocha-cli')

  grunt.registerTask('default', ['run', 'mochacli', 'stop:api']);

  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['mocha']);

  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('default', ['mochacli']);
  grunt.registerTask('cover', ['mocha_istanbul']);
  grunt.registerTask('cover-check', ['istanbul_check_coverage']);


  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['htmlhint']);
  grunt.registerTask('default', ['csslint']);
  grunt.registerTask('default', ['eslint']);
};