module.exports = function (grunt) {

    // instead on loading every task using grunt.loadNpmTasks, we can use this method
    // it will load all the grunt tasks from the package.json
    require('load-grunt-tasks')(grunt);
    var userConfig = require('./build.config.js');

    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            beforeBuild: ['<%=config.cleanDir%>'],
            afterBuild: ['<%=config.afterBuildClean%>']
        },
       /* less: {
            development: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                //src: 'assets/css/app.less',
                //dest: 'assets/css/app.css',
                files: {
                    "src/assets/css/app.css": '<%= config.appLessFile %>'
                }
            }
        },*/
        concat: {
            appFiles: {
                src: [ '<%=config.appJsFiles%>' ],
                dest: '<%=config.appJsFilesDest%>.js'
            },
            vendorFiles: {
                src: [ '<%=config.appVendorJsFiles%>' ],
                dest: '<%=config.appVendorJsFilesDest%>.js'
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            appFiles: {
                src: '<%=config.appJsFilesDest%>.js',
                dest: '<%=config.appJsFilesDest%>.min.js'
            }
        },
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['clean:beforeBuild', 'concat', 'uglify', 'clean:afterBuild']);
    // grunt.registerTask('default', ['concat', 'uglify', 'clean', 'less']);
    //grunt.registerTask('clean', ['clean']);

};


