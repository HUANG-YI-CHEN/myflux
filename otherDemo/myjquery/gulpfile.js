var gulp = require('gulp'),
	connect = require('gulp-connect'),
	rename = require('gulp-rename'),
	stylus = require('gulp-stylus');
 
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});



gulp.task('watch', function () {
  gulp.watch(['./*.styl'], ['stylus']);
  gulp.watch(['./index.html','./*.js'], ['htmljs']);
});

gulp.task('htmljs', function () {
  gulp.src('./index.html')
    .pipe(connect.reload()); 
});

gulp.task('stylus', function () {
  gulp.src('./main.styl')
    .pipe(stylus({ compress: true }))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload()); 
});

gulp.task('default', ['connect','stylus','watch']);