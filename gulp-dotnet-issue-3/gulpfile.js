/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

// build.js
// 1. Works? Yes.
var gulp = require('gulp');
var Dotnet = require('gulp-dotnet');
gulp.task('build:csharp', function (cb) {
	Dotnet.build({ cwd: './' }, cb);
});


// watch.js
// 1. Works? No.
//		>> Error: [14:02:01] Task 'build' is not in your gulpfile
//		++ Change 'build' to 'build:csharp'.
// 2. Works? No.
//		>> Error: gutil.log(`File ${event.path} was ${event.type}, running tasks...`);
//		          ^
//		ReferenceError: gutil is not defined
//		++ Add gutil requirement
// 3. Works? No.
//		A. Server doesn't start until a file is changed. It should start right away.
//		B. After a file is changed, 'build:csharp' completes w/o error. However, 'start:api' never starts listening.
//		>> Problem: [14:12:30] DOTNET:  Exiting...
var runSequence = require('run-sequence');
// @2 var gutil = require('gulp-util');
var paths = './**/*.cs';

function changed(event) {
	gutil.log(`File ${event.path} was ${event.type}, running tasks...`);
};

gulp.task('watch', ['build'], function () {
// @1 gulp.task('watch', ['build:csharp'], function () {
	gulp.watch(paths, { interval: 500 }, function () {
		runSequence('build', 'start:api');
// @1		runSequence('build:csharp', 'start:api');
	}).on('change', changed);
});


// server.js
// 1. Works? No.
//		>> Problem: [14:10:38] DOTNET:  Exiting...
//		No clue why.
var server;
gulp.task('start:api', function (cb) {
	if (!server) server = new Dotnet({ cwd: paths.api });
	server.start('weblistener', cb);
});