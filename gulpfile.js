var gulp = require('gulp');
var uglify = require('gulp-uglify'); // compressing javascript files
var minify = require('gulp-minify-css'); // compressing css
var imageopt = require('gulp-imagemin'); // compressing images
var concat = require('gulp-concat'); // joining files
var plumber = require('gulp-plumber'); // fix for errors
var sass = require('gulp-sass'); // sass
var gulpSequence = require('gulp-sequence'); // running tasks in provided sequence
var clean = require('gulp-clean'); // deleting files/folders
var uncss = require('gulp-uncss'); // removes unused css rules
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

// Tasks for developing (coding)

gulp.task('html', function() {
    gulp.src('app/*')
        .pipe(plumber())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({
            stream: true
        }));

    gulp.src('app/.*')
        .pipe(plumber())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({
            stream: true
        }));
})



gulp.task('images', function() {
    gulp.src(['app/images/*.png', 'app/images/*.jpg', 'app/images/*.ico'])
        .pipe(plumber())
        .pipe(imageopt({
            optimalizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('app/images'));
})

gulp.task('host', ['scss'], function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch('app/styles/scss/*.scss', ['scss']);
});

gulp.task('js', ['js-concat'], function() {
    return gulp.src(['app/scripts/**/*.js'])
        .pipe(plumber())
        .pipe(gulp.dest('app/scripts'))
        .pipe(browserSync.stream());
})

gulp.task('js-concat', ['js-clean'], function(){
    return gulp.src(['app/scripts/**/*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/scripts'))
})

gulp.task('js-clean', function(){
    return gulp.src(['app/scripts/main.js'])
    .pipe(clean());
})

gulp.task('scss', function() {
    return gulp.src(['app/styles/scss/*.scss'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('app/styles'))
        .pipe(browserSync.stream());
})

gulp.task('default', ['host'], function() {
    gulp.watch('app/styles/scss/*.scss', ['scss']);
    gulp.watch('app/scripts/**/*.js', ['js']);
    gulp.watch('app/images/**', ['images']);
    gulp.watch('app/*.html', ['html']);
})

// Tasks for deploying (distribution)

gulp.task('htmlDeploy', function() {
    gulp.src('app/*')
        .pipe(plumber())
        .pipe(gulp.dest('dist'));

    gulp.src('app/.*')
        .pipe(plumber())
        .pipe(gulp.dest('dist'));

    gulp.src('app/fonts/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('dist/fonts'));
})

gulp.task('ie', function() {
    return gulp.src(['app/scripts/ie/*.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
})

gulp.task('scssDeploy', function() {
    gulp.src(['app/styles/*.scss', 'app/styles/scss/*.scss', 'app/styles/*.css'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(uncss({
            html: ['app/index.html'],
            ignore: ['.affix', '.affix .nav a', '.affix img']
        }))
        .pipe(minify())
        .pipe(gulp.dest('dist/styles'));
})

gulp.task('jsDeploy', function() {
    return gulp.src(['app/scripts/**/*.js', '!app/scripts/main.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('imagesDeploy', function() {
    gulp.src(['app/images/*.png', 'app/images/*.jpg', 'app/images/*.ico'])
        .pipe(plumber())
        .pipe(imageopt({
            optimalizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'));
})

gulp.task('concat', function() {
    return gulp.src(['dist/scripts.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/scripts'));
})

gulp.task('cleanDeploy', function() {
    return gulp.src('dist')
        .pipe(clean({
            force: true
        }));
})

gulp.task('deploy', gulpSequence('cleanDeploy', ['htmlDeploy', 'jsDeploy', 'ie', 'scssDeploy', 'imagesDeploy']))
