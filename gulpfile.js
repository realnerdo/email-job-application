var gulp    = require('gulp'),
    mjml    = require('gulp-mjml'),
    concat  = require('gulp-concat'),
    connect = require('gulp-connect'),
    notify  = require('gulp-notify');

gulp.task('templates', function() {
    gulp.src('src/mjml/*.mjml')
        .pipe(mjml())
        .pipe(gulp.dest('src/html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('en', function() {
    gulp.src(['./src/html/headers.html', './src/html/english.html'])
        .pipe(concat('english.html'))
        .pipe(gulp.dest('./dist/send'))
        .pipe(notify("Let's get that job!"));
});

gulp.task('sp', function() {
    gulp.src(['./src/html/headers.html', './src/html/spanish.html'])
        .pipe(concat('spanish.html'))
        .pipe(gulp.dest('./dist/send'))
        .pipe(notify("Let's get that job!"));
});

gulp.task('connect', function() {
    connect.server({
        root: './dist/',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch('src/mjml/*.mjml', ['templates']);
});

gulp.task('default', ['connect', 'watch']);
