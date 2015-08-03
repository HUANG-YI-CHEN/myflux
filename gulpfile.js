var gulp = require('gulp'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename');
 
gulp.task('connect', function() {
  connect.server({
    //root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
	gulp.src('./*.html').pipe(connect.reload());
});

gulp.task('bundle', function() {
  gulp.src('./js/app.js', { read: false })
    .pipe(browserify({
      transform: ['reactify'],
      extensions: ['.jsx'],
      debug: true
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./js'))
    .pipe(connect.reload()); 
});


gulp.task('watch', function () {
  gulp.watch(['./index.html'], ['html']);
  gulp.watch([
  	'./js/components/*.jsx',
  	'./js/actions/*.js',
  	'./js/constants/*.js',
  	'./js/dispatcher/*.js',
  	'./js/stores/*.js'
  	], ['bundle']);
});


gulp.task('default', ['bundle','connect', 'watch']);