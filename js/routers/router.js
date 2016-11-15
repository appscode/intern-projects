const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  constructor(options) {
    Backbone.Router.prototype.constructor.call(this, options);
    this.books = options.books;
    this.bookList = options.bookList;
    this.addBook = options.addBook;
  },
  routes: {
    '': 'home',
    'new': 'AddBook'
  },
  home() {
    this.bookList.render();
  },
  AddBook() {
    this.addBook.render();
  }
});
