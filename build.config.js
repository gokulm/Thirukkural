/**
 * Created by gokulnath.murugesan on 9/4/2015.
 */
module.exports = {

    buildDir: 'release/',
    buildDebugDir: 'debug/',

    config: {
        cleanDir: '<%=buildDir%>/*',
        afterBuildClean: ['<%=buildDir%>/scripts/app.js', '<%=buildDir%>/assets/css/app.css'],
        appJsFiles: ['src/app/**/*.js'],
        appVendorJsFiles: ['src/libs/**/*.js'],
        appLessFiles: ['src/assets/css/*.less'],
        appJsFilesDest: '<%=buildDir%>scripts/app',
        appVendorJsFilesDest: '<%=buildDir%>scripts/vendor',
        cssVendorFiles: ['src/libs/bootstrap/dist/css/bootstrap.min.css', 'src/libs/angular-loading-bar/build/loading-bar.min.css'],
        cssFilesDest: ['<%=buildDir%>/assets/css/']
    }
};