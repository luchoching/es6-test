var gulp = require('gulp');
var babel = require('gulp-babel');

var paths = {
  es6: 'es6/**/*.js',
  es5: 'build'
};

gulp.task('babel', ()=> 
  gulp
    .src(paths.es6)
    .pipe(babel({ 
      whitelist: ['es6.destructuring'] 
    }))
    .pipe(gulp.dest(paths.es5))
);

gulp.task('watch', ()=>
  gulp.watch(paths.es6, ['babel'])
);

gulp.task('default', ['watch']);
