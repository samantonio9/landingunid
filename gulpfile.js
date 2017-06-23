/**
 * Created by zamisantonio on 23/06/17.
 */
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

gulp.task('stylus', function(){
    return gulp.src('./assets/styles/*.styl')
        .pipe(stylus())
        .pipe(cssnano())
        .pipe(rename('landing.min.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:8888",
        online: true
    });
});
