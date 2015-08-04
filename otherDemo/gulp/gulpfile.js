var gulp = require('gulp'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename'),
	stylus = require('gulp-stylus');
 
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./*.js',"!./bundle.js"], ['bundle']);
  gulp.watch(['./*.styl'], ['stylus']);
});

gulp.task('bundle', function () {
  gulp.src('./index.js', { read: false })
	.pipe(browserify())
	.pipe(rename('bundle.js'))
	.pipe(gulp.dest('./'))
	.pipe(connect.reload()); 
});


gulp.task('stylus', function () {
  gulp.src('./main.styl')
    .pipe(stylus({ compress: true }))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload()); 
});

gulp.task('default', ['connect','bundle','watch']);