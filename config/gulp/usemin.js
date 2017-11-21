const conf = require('../config.json'),
gulp = require('gulp'),
usemin = require('gulp-usemin'),
cleanCss = require('gulp-clean-css'),
rev = require('gulp-rev');


gulp.task('usemin', function() {
  'use strict';
  return gulp.src(conf.base.build + '*.html')
    .pipe(usemin({
      css: [ cleanCss, 'concat' ], // , rev
      jsAttributes : {
        async : true,
      },
      // js: [ rev ]
    }))
    .pipe(gulp.dest(conf.base.dist));
});
