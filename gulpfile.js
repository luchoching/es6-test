var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var paths = {
  es6: 'es6/**/*.js',
  es5: 'build',
  sourceRoot: path.join(__dirname, 'es6')
};

gulp.task('babel', ()=> 
  gulp
    .src(paths.es6)
    .pipe(sourcemaps.init())
    .pipe(babel({ 
      whitelist: ['es6.destructuring'] 
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.es5))
);

gulp.task('watch', ()=>
  gulp.watch(paths.es6, ['babel'])
);

gulp.task('default', ['watch']);
