var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {

	gulp.src('./')
		.pipe(webserver({
		livereload: true,
		directoryListing: false,
		open: true,
		fallback: 'index.html'
		}));
});


gulp.task('sass', function () {
  return gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});


gulp.task('default',['webserver','sass:watch']);
