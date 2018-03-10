module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            dev: {
                dest: 'server/static/',
                js_dest: 'server/static/bower/js',
                css_dest: 'server/static/bower/css',
                options: {
                    packageSpecific: {
                        bootstrap: {
                            files: [
                                "dist/css/bootstrap.css",
                                "dist/css/bootstrap-grid.css",
                                "dist/css/bootstrap-reboot.css",
                            ]
                        }
                    }
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                compress: false
            },
            my_target: {
                files: {
                    'server/dist/js/bikinirepair.js': ['server/static/js/bikinirepair.js'],
                    'server/dist/js/angular.js': [
                        'server/static/bower/js/angular.js',
                        'server/static/bower/js/angular-route.js',
                        'server/static/bower/js/ui-bootstrap-tpls.js'
                    ],
                    'server/dist/js/jquery.js': ['server/static/bower/js/dist/jquery.js'],
                    'server/dist/js/underscore.js': ['server/static/bower/js/underscore.js'],
                    'server/dist/js/require.js': ['server/static/bower/js/require.js'],
                    'server/dist/js/script.js': ['server/static/js/script.js', 'server/static/bower/js/src/md5.js']
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'server/dist/css/style.css': [
                        'server/static/bower/css/dist/css/bootstrap.css',
                        'server/static/bower/css/dist/css/bootstrap-grid.css',
                        'server/static/bower/css/dist/css/bootstrap-reboot.css',
                        'server/static/css/style.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'server/dist/index.html': 'server/static/index.html'
                }
            }
        },
        watch: {
            configFiles: {
                files: [ 'Gruntfile.js', 'config/*.js' ],
                options: {
                    reload: true
                }
            },
            scripts: {
                files: ['server/static/**/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['server/static/**/*.css'],
                tasks: ['cssmin']
            },
            html: {
                files: ['server/static/**/*.html'],
                tasks: ['htmlmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower');

    grunt.registerTask('default', ['bower', 'uglify', 'cssmin', 'htmlmin']);

    grunt.registerTask('dev', ['watch']);

};