const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

function style() {
  return src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css/'))
    .pipe(browserSync.stream())
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  })
  watch('./scss/**/*.scss', style)
  watch('./*.html').on('change', browserSync.reload)
  watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watcher
