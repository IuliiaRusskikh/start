let gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


/* html */
gulp.task('pug', function(){
    return gulp.src('app/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}))
});

/* css */
gulp.task('scss', function(){
    return gulp.src('app/css/*.scss')
        .pipe(sass({outputStyle:'expanded'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

/* browser-sync */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});


gulp.task('watch', function(){
    gulp.watch('app/*.pug', gulp.parallel('pug'))
    gulp.watch('app/css/*.scss', gulp.parallel('scss'))
});


gulp.task('default', gulp.parallel('browser-sync', 'watch'))