var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('js', function(){
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets'))
})
