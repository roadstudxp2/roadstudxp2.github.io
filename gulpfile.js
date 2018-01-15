/**
 * Created by bong on 2017/2/4.
 */
var gulp = require("gulp"),
    csso = require('gulp-csso'),// 压缩 css 的文件
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    concat  = require('gulp-concat'),

    rename = require("gulp-rename");



/*打包合并压缩 js*/
gulp.task('uglify-js', function () {
   return gulp.src(['./src/js/*.js'])
       .pipe(uglify())
       .pipe(rename(function (path) {
           console.log(path);
       }))
       .pipe(gulp.dest('build/js'));
});
gulp.task('uglify-js-lib', function () {
    return gulp.src(['./src/js/lib/*.js'])
        .pipe(uglify())
        .pipe(rename(function (path) {
            console.log(path);
        }))
        .pipe(gulp.dest('build/js/lib'));
});
gulp.task('csso', function () {
    return gulp.src(['./src/css/*.css'])
        .pipe(csso())
        .pipe(gulp.dest('build/css'));
});
gulp.task('csso-lib', function () {
    return gulp.src(['./src/css/lib/*.css'])
        .pipe(csso())
        .pipe(gulp.dest('build/css/lib'));
});

// 相当于将一些公共 js 复制到 build 文件夹下
gulp.task('static', function() {
    return gulp.src(['./src/*.*','./src/img/'])
        .pipe(gulp.dest('./build/'));
});
gulp.task('static-img', function() {
    return gulp.src(['./src/img/**'])
        .pipe(gulp.dest('./build/img'));
});
gulp.task('static-fonts', function() {
    return gulp.src(['./src/fonts/**.*'])
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('dev', ['uglify-js',
    'uglify-js-lib',
    'csso',
    'csso-lib','static','static-img']);

