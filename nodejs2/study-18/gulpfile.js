//leia o arquivo app.js

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('my_task', function(){
	return gulp.src(['./app.js']) // ou desse jeito:> './*.js'
		.pipe(uglify()) //mificar o arquivo
		.pipe(gulp.dest('./dist')) //Jogará no pasta 'dist' quando o arquivo for minificado
});

//Para testar, execute "gulp my_task"

//Para qualquer alteração, executar "my_task"
gulp.task("observar", function(){
	//Watch é responsável por observar a alteração de arquivos
	return gulp.watch(['./app.js'], ['my_task']); //Tasks serão executados quando app.js for alterado
});

//gulp --tasks;   (listas as tasks)
