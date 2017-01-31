var gulp        = require('gulp');
var browserSync = require('browser-sync').create();;
var reload      = browserSync.reload;
var sass        = require('gulp-sass');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    //watch files
    var files = [
    './style.css',
    './*.php'
    ];

    //initialize browsersync
    browserSync.init(files, {
    //browsersync with a php server
    proxy: {
        target: "localhost:8080/wordpress",
        proxyRes: [
            function (res) {
                res.headers["Expires"] = "0";
                res.headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
                res.headers["Pragma"] = "no-cache";
            }
        ]
    }


    });
    gulp.watch('./*.php').on('change', browserSync.reload);
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream:true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);

});
