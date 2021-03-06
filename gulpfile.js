'use strict'
var componnentName = 'Lightning_panelCustomerJS';
var outputVarName = 'reactjs'
//var srcFiles= './src/*.js';
var srcFile = './src/main.js';
var resourceFolder = './pkg/staticresources';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),　 //最新のgulpと組み合わせるとうまくいかない
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    jsforce = require('jsforce');

//build js file with compress mode
gulp.task('build', function(){
  return browserify({
    entries : srcFile,
    transform : [reactify],
    standalone: outputVarName
  })
  .bundle()
  .pipe(source(componnentName + '.resource'))
  .pipe(buffer())
  .pipe($.uglify())
  .pipe(gulp.dest(resourceFolder));
});

//build js file without compressed
gulp.task('build-full', function(){
  return browserify({
    entries : srcFile,
    transform : [reactify],
    standalone: outputVarName
  })
  .bundle()
  .pipe(source(componnentName + '.resource'))
  .pipe(gulp.dest(resourceFolder));
});

var forceDeploy = function(username, password) {
  return through2.obj(function(file, enc, callback) {
    var conn;
    conn = new jsforce.Connection();
    return conn.login(username, password).then(function() {
      console.log('successfully logged in.');
      return conn.metadata.deploy(file.contents).complete({
        details: true
      });
    })
    .then(function(res) {
      if (res.details !== null && !res.success){
        console.error(res);
        return callback(new Error('Deploy failed.'));
      }
      return callback();
    }, function(err) {
      console.error(err);
      return callback(err);
    });
  });
};

//deploy static resource package to salesforce org using jsforce
//set userid,password for salesforce org in environment variable
gulp.task('deploy', function(){
  return gulp.src("pkg/**/*", {
    base: "."
  })
  .pipe($.zip('pkg.zip'))
  .pipe(forceDeploy(process.env.SF_USERNAME, process.env.SF_PASSWORD));
});

gulp.task('watch', function(){
  gulp.watch("./src/**/*", ["build"]);
  gulp.watch("./pkg/**/*", ["deploy"]);
});
