var gulp    = require('gulp'),
    mjml    = require('gulp-mjml'),
    concat  = require('gulp-concat'),
    connect = require('gulp-connect'),
    notify  = require('gulp-notify');

gulp.task('template', function() {
    gulp.src('src/template.mjml')
        .pipe(mjml())
        .pipe(gulp.dest('src'));
});

gulp.task('build', function() {
    gulp.src(['./src/headers.html', './src/template.html'])
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./dist/'))
        .pipe(notify("Let's get that job!"));
});

gulp.task('connect', function() {
    connect.server({
        root: './dist/',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch('src/template.mjml', ['template']);
    gulp.watch('src/*.html', ['build']);
});

gulp.task('default', ['connect', 'watch']);
