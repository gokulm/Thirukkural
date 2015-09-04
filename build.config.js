/**
 * Created by gokulnath.murugesan on 9/4/2015.
 */
module.exports = {

    buildDir: 'target/',
    buildDebugDir: '<%=buildDir%>debug/',

    appFiles: {
        js: ['src/**/*.js'],
        less: ['src/assets/css/app.less']
    },
    appJsFilesDest: '<%=buildDebugDir %>app.js',
    appJsFilesMinifiedDest: '<%=buildDebugDir %>app.min.js'
};