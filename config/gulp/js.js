const conf = require('../config.json'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  gulpWebpack = require('webpack-stream'),
  eslint = require('gulp-eslint'),
  webpackDevConfig = require('../webpack.config.dev');
  webpackProdConfig = require('../webpack.config.prod');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

function js (config) {
  'use strict';
  return gulp.src([conf.base.src + conf.files.js])
  .pipe(eslint({configFile: './.eslintrc.json'}))
  .pipe(eslint.format())
  .pipe(gulpWebpack(config, webpack))
  .on('error', handleError)
  .pipe(gulp.dest(conf.base.build + conf.path.js));
}

gulp.task('js:build', function() {
  'use strict';
  return js(webpackDevConfig);
});

gulp.task('js:release', function() {
'use strict';
return js(webpackProdConfig);
});
