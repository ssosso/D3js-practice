const express = require('express');
const app = express();
app.listen(1515, () => console.log('app listening on port 1515!!'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/static/template');

app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {
	res.render('index');
});

app.use('/basicConcept', require(__dirname + '/src/router/basicConcept'));
