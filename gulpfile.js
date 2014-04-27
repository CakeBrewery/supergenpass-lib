var gulp = require('gulp');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
	var source = require('vinyl-source-stream');
	var browserify = require('browserify');

	browserify('./supergenpass')
		.bundle({ standalone: 'supergenpass' })
		.pipe(source('supergenpass.browser.js'))
		.pipe(streamify(uglify({preserveComments: 'some'})))
		.pipe(gulp.dest('./dist'));
});
