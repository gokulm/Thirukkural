/**
 * Created by gokulnath.murugesan on 9/4/2015.
 */
module.exports = {

    buildDir: 'release/',
    buildDebugDir: 'debug/',

    config: {
        cleanDir: '<%=buildDir%>/*',
        afterBuildClean: '<%=buildDir%>/scripts/app.js',
        appJsFiles: ['src/app/**/*.js'],
        appVendorJsFiles: ['src/libs/**/*.js'],
        appLessFile: ['src/assets/css/app.less'],
        appJsFilesDest: '<%=buildDir%>scripts/app',
        appVendorJsFilesDest: '<%=buildDir%>scripts/vendor',
    }
};