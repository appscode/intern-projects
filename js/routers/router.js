const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  constructor(options) {
    Backbone.Router.prototype.constructor.call(this, options);
    this.books = options.books;
    this.bookList = options.bookList;
    this.addBook = options.addBook;
    this.bookDetails = options.bookDetails;
  },
  routes: {
    '': 'home',
    'new': 'AddBook',
    'details/:id': 'Details'
  },
  home() {
    this.bookList.render();
  },
  AddBook() {
    this.addBook.render();
  },
  Details(bid) {
    // const that = this;
    // console.log(id);
    this.bookDetails.render(this.books.where({id: bid}));
  }
});
