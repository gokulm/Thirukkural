module.exports = function (grunt) {

    // instead on loading every task using grunt.loadNpmTasks, we can use this method
    // it will load all the grunt tasks from the package.json
    require('load-grunt-tasks')(grunt);
    var userConfig = require('./build.config.js');

    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),
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
                    "src/assets/css/app.css": '<%= appFiles.less %>'
                }
            }
        },
        concat: {
            js: {
                src: [ '<%= appFiles.js %>' ],
                dest: '<%= appJsFilesDest %>'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= appJsFilesDest %>',
                dest: '<%= appJsFilesMinifiedDest %>'
            }
        },
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'clean', 'less']);
    //grunt.registerTask('clean', ['clean']);

};


