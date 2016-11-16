const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;

const Books = require('./collections/books');
const AppRouter = require('./routers/router');
const BookList = require('./views/book_list');
const AddBook = require('./views/add_book');
const BookDetails = require('./views/details_view');
global.nunjucksEnv = new global.nunjucks.Environment(new global.nunjucks.PrecompiledLoader());

const books = new Books();
const bookList = new BookList({books});
const addBook = new AddBook({books});
const bookDetails = new BookDetails({books});
global.router = new AppRouter({books, bookList, addBook, bookDetails});

Backbone.history.start();
