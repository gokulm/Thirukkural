module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['libs/angular/angular.js'],
                dest: 'build/angular.min.js'
            }
        },
        clean: {
            release: ['ToBeCleaned/*']
        },
        less: {
            development: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                //src: 'assets/css/app.less',
                //dest: 'assets/css/app.css',
                files: {
                    "src/assets/css/app.css": "src/assets/css/app.less"
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'clean', 'less']);

    //grunt.registerTask('clean', ['clean']);

};


