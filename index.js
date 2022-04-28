let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views'); //view, router , publis 등 경로 안내해줌
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));  //css, js 등 파일을 넣어놨따!

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
