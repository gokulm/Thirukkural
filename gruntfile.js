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
        less: {
            release: {
                options: {
                    strictMath: true,
                    sourceMap: false,
                    outputSourceFiles: true
                },
                files: {
                    "<%=config.cssFilesDest%>/app.css": '<%= config.appLessFiles %>'
                }
            }
        },
        concat: {
            appFiles: {
                src: [ '<%=config.appJsFiles%>' ],
                dest: '<%=config.appJsFilesDest%>.js'
            },
            vendorFiles: {
                src: [ '<%=config.appVendorJsFiles%>' ],
                dest: '<%=config.appVendorJsFilesDest%>.js'
            },
            cssFiles: {
                src: ['<%=config.cssVendorFiles%>'],
                dest: '<%=config.cssFilesDest%>vendor.min.css'
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            appJsFiles: {
                src: '<%=config.appJsFilesDest%>.js',
                dest: '<%=config.appJsFilesDest%>.min.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '<%=config.cssFilesDest%>app.min.css' : ['<%=config.cssFilesDest%>app.css']
                 }
            }
        },
        copy: {
            htmlFiles: {
                files: [
                    { expand: true, cwd: 'src/', src: ['<%=config.appHtmlFiles%>'], dest: '<%=config.appHtmlFilesDest%>' },
                    { expand: true, cwd: 'src/', src: ['<%=config.appOtherAssets%>'], dest: '<%=config.appOtherAssetsDest%>' }
                ]
            }
        },
        processhtml: {
            build: {
                files: {
                    '<%=buildDir%>index.html' : ['<%=config.cleanDir%>index.html']
                }
            }
        }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['clean:beforeBuild', 'concat', 'less', 'uglify', 'cssmin', 'clean:afterBuild', 'copy', 'processhtml']);

};


