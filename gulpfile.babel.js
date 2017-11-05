import del from 'del';                // Delete something
import gulp from 'gulp';              // Task runner
import size from 'gulp-size';					// Display the size of something
import gutil from 'gulp-util';        // Utility functions for gulp plugins
import babel from 'gulp-babel';       // Compile ES6 to ES5
import notify from 'gulp-notify';     // Notification plugin for gulp
import concat from 'gulp-concat';     // Concatenates files
import uglify from 'gulp-uglify';     // Minify JS
import plumber from 'gulp-plumber';   // Prevent pipe breaking caused by errors from gulp plugins
import jshint from 'gulp-jshint';     // JS code linter
import stylish from 'jshint-stylish'; // Reporter for JSHint
const config = {
  path: {
    build: 'dist/',
    src: 'src/**/*.js',
    watch: 'src/js/**/*.js',
    clean: ['dist/content.js*'],
  }
};

const clean = () => del(config.path.clean);
export { clean };

export function js() {
  return gulp.src(config.path.src)
    .pipe(plumber({
      errorHandler: function(error) {
        const message = error.message || '';
        const errName = error.name || '';
        const codeFrame = error.codeFrame || '';
        gutil.log(gutil.colors.red.bold('[JS Error]') + ' ' + gutil.colors.bgRed(errName));
        gutil.log(gutil.colors.bold('message:') + ' ' + message);
        gutil.log(gutil.colors.bold('codeframe:') + '\n' + codeFrame);
        notify({
          title: "[JS Error] " + errName,
          message: message
        }).write('');
        this.emit('end');
      }
    }))
    .pipe(jshint()).pipe(jshint.reporter(stylish))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('content.js'))
    .pipe(uglify())
    .pipe(size({ title: 'JS' }))
    .pipe(gulp.dest(config.path.build))
}

const build = gulp.series(clean, js);
export { build };

export default build;
