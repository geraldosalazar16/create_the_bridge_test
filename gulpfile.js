const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// complise scss into css
function style() {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/public/css'))
    .pipe(browserSync.stream())
}

// move html to public
function html() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./src/public'))
    .pipe(browserSync.stream())
}

// move img to public
function img() {
    return gulp.src('./src/assets/**/*.{png,gif,jpg}')
    .pipe(gulp.dest('./src/public/assets'))
    .pipe(browserSync.stream())
}

// move js to public
function js() {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./src/public/js'))
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src/public/'
        }
    })
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/*.html').on('change', html);
    gulp.watch('./src/assets/**/*.{png,gif,jpg}').on('change', img);
    gulp.watch('./src/js/*.js').on('change', js);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;