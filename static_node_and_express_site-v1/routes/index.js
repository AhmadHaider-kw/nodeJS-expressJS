const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
	res.render('index', { projects });
	console.log('index page'.bgBrightWhite.bold.blue);
});

router.get('/about', (req, res) => {
	res.render('about');
	console.log('about page'.bgBrightWhite.bold.blue);
});

router.get('/project/:id', (req, res) => {
	// https://www.youtube.com/watch?v=Oe421EPjeBE&t=36s
	const projectid = projects.find(({ id }) => id === Number(req.params.id));

	if (projectid) {
		console.log('projects page'.bgBrightWhite.bold.blue);
		return res.render('project', { projectid });
	} else {
		const err = new Error('Not Found !');
		err.status = 404;
		res.locals.error = err;
		res.status(err.status);
		res.render('error');
	}
});

module.exports = router;
