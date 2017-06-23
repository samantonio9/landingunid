/**
 * Created by zamisantonio on 23/06/17.
 */
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();


gulp.task('stylus', function(){
    return gulp.src('./assets/styles/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:8888",
        online: true
    });
});

gulp.task('watch', function() {
    gulp.watch('./assets/styles/*.styl', ['stylus'])
    gulp.watch("./*/**.twig").on('change', browserSync.reload)
    gulp.watch("./**/*.php").on('change', browserSync.reload)
    gulp.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
gulp.task('default', [ 'stylus', 'browser-sync', 'watch']);