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
        // appVendorJsFiles: ['src/libs/**/*.js'],
       /* appJsFiles: ['src/app/app.js', 'src/app/layout/layout-controller.js', 'src/app/home/home-controller.js', 'src/app/chapters/chapters-controller.js', 'src/app/sections/sections-controller.js', 'src/app/chaptergroups/chaptergroups-controller.js',
            'src/app/chapters/sectionchapters-controller.js', 'src/app/chapters/chaptergroupchapters-controller.js', 'src/app/search/search-controller.js', 'src/app/services/thirukkurals-repository.js', 'src/app/services/thirukkkurals-util.js'],*/
        appVendorJsFiles: ['src/libs/jquery/dist/jquery.min.js', 'src/libs/jquery.highlight-4.js', 'src/libs/angular/angular.js', 'src/libs/angular-route/angular-route.js', 'src/libs/angular-ui/build/angular-ui.js',
            'src/libs/angular-ui-router/release/angular-ui-router.js', 'src/libs/bootstrap/dist/js/bootstrap.min.js', 'src/libs/angular-ui-bootstrap-tpls-0.13.0.js', 'src/libs/angular-ui-utils/ui-utils.min.js', 'src/libs/angular-sanitize/angular-sanitize.min.js',
            'src/libs/angular-localization/angular-localization.min.js', 'src/libs/angular-loading-bar/build/loading-bar.min.js', 'src/libs/angular-cookies/angular-cookies.min.js'],
        appLessFiles: ['src/assets/css/*.less'],
        appJsFilesDest: '<%=buildDir%>scripts/app',
        appVendorJsFilesDest: '<%=buildDir%>scripts/vendor',
        cssVendorFiles: ['src/libs/bootstrap/dist/css/bootstrap.min.css', 'src/libs/angular-loading-bar/build/loading-bar.min.css'],
        cssFilesDest: ['<%=buildDir%>/assets/css/'],
        appHtmlFiles: ['**/*.html', 'index.html', '!libs/**/*'],
        appHtmlFilesDest: '<%=buildDir%>',
        appOtherAssets: ['assets/languages/**/*.json'],
        appOtherAssetsDest: '<%=buildDir%>'
    }
};