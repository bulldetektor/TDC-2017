var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

gulp.task("default", function () {
	return browserify({
		basedir: '.',
		entries: ['src/index.ts'],
		cache: {},
		packageCache: {},
		standalone: "TDC",
	})
		.plugin(tsify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(".dist"));
});