/** @format */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./model/Book');

const db = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(db, () => console.log('db running'));

const app = express();
const Port = process.env.PORT || 9001;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extendd: true,
	}),
);

app.get('/', (req, res) => {
	res.send('Happy to be doing this');
});

app.get('/books', (req, res) => {
	console.log('Getting all the books');

	Book.find({}).exec((err, results) => {
		if (err) {
			res.send(`An error as occurred ${err}`);
		} else {
			console.log(results);
			res.json(results);
		}
	});
});

app.get('/books/:id', (req, res) => {
	console.log('Getting one book');
	Book.findOne({
		_id: req.params.id,
	}).exec((err, book) => {
		if (err) {
			res.send(`An error occured ${err}`);
		} else {
			console.log(book);
			res.json(book);
		}
	});
});

app.post('/book', (req, res) => {
	let newBook = new Book();

	newBook.title = req.body.title;
	newBook.author = req.body.author;
	newBook.category = req.body.category;

	newBook.save((err, book) => {
		if (err) {
			res.send(`An error occured ${err}`);
		} else {
			console.log(book);
			res.send(book);
		}
	});
});

app.post('/book2', (req, res) => {
	Book.create(req.body, (err, book) => {
		if (err) {
			res.send('An error occured creating a book');
		} else {
			res.send(book);
		}
	});
});

app.put('/book/:id', (req, res) => {
	Book.findOneAndUpdate(
		{
			_id: req.params.id,
		},
		{
			$set: {
				title: req.body.title,
			},
		},
		{ upset: true },
		(err, update) => {
			if (err) {
				res.send('An error occured');
			} else {
				res.send(update);
			}
		},
	);
});

app.delete('/book/:id', (req, res) => {
	Book.findOneAndRemove(
		{
			_id: req.params.id,
		},
		(err, delBook) => {
			if (err) {
				res.send('An error occured');
			} else {
				res.send(delBook);
			}
		},
	);
});

app.listen(Port, () => console.log(`The server is running at port ${Port}`));
