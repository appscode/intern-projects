const Backbone = require('backbone');
const $ = require('jquery');
const AddBook = require('../views/add_book');
const BooKList = require('../views/book_list');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  constructor(options) {
    Backbone.Router.prototype.constructor.call(this, options);
    this.books = options.books;
    // console.log('in router');
  },
  routes: {
    '': 'home',
    'new': 'AddBook'
  },
  home() {
    console.log('size: ', this.books.length);
    const bookList = new BooKList({books: this.books});
    bookList.render();
  },
  AddBook() {
    // console.log('add new books!');
    console.log('size: >>>>', this.books.length);
    const addBook = new AddBook({books: this.books});
    addBook.render();
  }
});
