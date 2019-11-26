let express = require('express');
const ChromeLauncher = require('chrome-launcher'); // 크롬 브라우저를 열기 위한 것
let app = express(); 
let router = require('./router/main')(app); // /router/main을 연결시킨 것
let port = 3000;

// views 안에 html 파일들이 있다
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// public 폴더에 있는 것들을 사용한다
app.use(express.static('public'));

// 웹서버 실행
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
