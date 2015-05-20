var 
  gulp = require('gulp');
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

gulp.task('default', ['sass']);

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(reload({ stream: true }));
});

gulp.task('watch', function() {
  browserSync.init( null, { server: { baseDir: './'}});
  gulp.watch('./scss/*.scss', ['sass']);
});

