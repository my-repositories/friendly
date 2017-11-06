import del from 'del';
import gulp from 'gulp';
import size from 'gulp-size';
import uglify from 'gulp-uglifyes';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

const config = {
  path: {
    build: 'dist/',
    clean: ['dist/content.js'],
    content: 'content.js',
    src: 'src/index.js',
  }
};

const clean = () => del(config.path.clean);
export { clean };

export function js() {
  return browserify({entries: config.path.src, debug: false})
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source(config.path.content))
    .pipe(buffer())
    .pipe(uglify({mangle: false, ecma: 6}))
    .pipe(size({ title: 'JS' }))
    .pipe(gulp.dest(config.path.build));
}

const build = gulp.series(clean, js);
export { build };
export default build;
