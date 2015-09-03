var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('js', function () {
    return browserify({
            entries: './js/index.jsx',
            extensions: ['.jsx'],
            debug: true,
            cache: {},
            packageCache: {}
        })
        .transform(babelify)
        .bundle()
        .on('error', function(err) {
            console.error(err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});


gulp.task('watch:js', ['js'], function () {
    gulp.watch('js/**/*.jsx', ['js']);
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('watch:html', ['html'], function() {
    gulp.watch('*.html', ['html']);
});

gulp.task('del', function() {
    del('build/*');
});

gulp.task('build', ['js', 'html']);
gulp.task('watch', ['watch:js', 'watch:html']);
gulp.task('default', ['build']);
