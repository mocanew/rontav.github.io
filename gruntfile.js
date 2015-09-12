module.exports = function(grunt) {
    var actions = ['jekyll', 'postcss', 'htmlmin'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jekyll: {
            options: {
                src: '.',
                dest: '../html'
            },
            dist: {}
        },
        postcss: {
            options: {
                diff: false,
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['> 2%']
                    }),
                    require('cssnano')({})
                ]
            },
            dist: {
                src: '../html/css/*.css'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '../html/index.html': '../html/index.html',
                    '../html/posts.html': '../html/posts.html'
                }
            }
        },
        clean: {
            css: [
                "../html/css/*.scss"
            ]
        },
        watch: {
            css: {
                files: 'css/*.scss',
                tasks: actions
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', actions);
};