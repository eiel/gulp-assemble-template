# これは何

[gulp-assemble]() を試してみた

```
$ npm install
$ npm install -g gulp
$ gulp
```

とすると、 _gh_pages が生成される。

# TODO

browsersync や sass 連携を調べたい。

# 作業メモ

npm init
npm install -g gulp
npm install --save-dev gulp gulp-assemble gulp-htmlmin


Gulpfile.jsを作成

```js
var gulp = require('gulp');
var assemble = require('gulp-assemble');
var htmlmin = require('gulp-htmlmin');

var options = {
  data: 'data/*.json',
  partials: 'templates/partials/*.hbs',
  layoutdir: 'templates/layouts/'
};

gulp.task('assemble', function () {
  gulp.src('templates/pages/*.hbs')
    .pipe(assemble(options))
    .pipe(htmlmin())
    .pipe(gulp.dest('_gh_pages/'));
});

gulp.task('default', ['assemble']);
```

templates/layouts/default.hbs

```html
<!DOCTYPE html>
<html  lang ="ja" >
  <head >
    <meta  charset ="UTF-8" >
    <title > {{ title }} </title >
  </head >
  <body >
    {{> body  }}
  </body >
</html >
```

templates/pages/index.hbs

```html
---
layout: default.hbs
title: Assemble Sample
mogu: "Hello, World"
---
<div class="entry">
  <h1>ごろごろ</h1>
  <div class="body">
       {{ mogu }}
  </div>
</div>
```
