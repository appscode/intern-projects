const Backbone = require('backbone');
const $ = require('jquery');
const AddNewBook = require('../views/add_book');
Backbone.$ = $;
module.exports = Backbone.Router.extend({
  constructor(options) {
    Backbone.Router.prototype.constructor.call(this, options);
    // this.books = options.books;
    // console.log('in router');
  },
  routes: {
    '': 'home',
    'new': 'AddBook'
  },
  home() {
    console.log('found home!');
  },
  AddBook() {
    // console.log('add new books!');
    const addnewBook = new AddNewBook();
    addnewBook.render();
  }
});
