var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');

var compilerOptions = require('./tsconfig.json').compilerOptions;

const SRC = 'src/**/*.ts';
const DEST = 'build';
const WATCH_LIST = ['src/**/*.ts', 'index.ts'];

gulp.task('tsc', function(){
    return gulp.src(SRC)
        .pipe(changed(DEST))
        .pipe(sourcemaps.init())
        .pipe(ts(compilerOptions))
        .on('error', function(err){
            console.log(err.stack);
            this.emit('end');
        })
        .pipe(sourcemaps.write({
            includeContent: false,
            sourceRoot: 'src'
        }))
        .pipe(gulp.dest(DEST))
});

gulp.task('watch', function(){
    return gulp.watch(WATCH_LIST, ['tsc']);
});

gulp.task('default', ['tsc', 'watch']);

