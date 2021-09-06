const express = require('express');
const app = express();
const colors = require('colors');
app.set('view engine', 'pug');
//expressjs.com/en/starter/static-files.html
const path = require('path');
app.use('/static', express.static(path.resolve(__dirname, 'public')));

const mainRoutes = require('./routes');
app.use(mainRoutes);

// handle errors
app.use((req, res, next) => {
	const err = new Error('Not Found ');
	err.status = 404;
	next(err);
});
app.use((err, req, res, next) => {
	res.locals.error = err;
	err.status = err.status;
	err.message = 'there are an error, please try again later.';
	res.status(err.status);
	res.render('error', err);
});

app.listen(3000, () => {
	console.log('the app running on port: 3000'.bgBrightWhite.bold.red);
});
