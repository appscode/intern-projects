const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
Backbone.LocalStorage = require('backbone.localstorage');
const Book = require('../models/book');

module.exports = Backbone.Collection.extend({
  model: Book,
  localstorage: new Backbone.LocalStorage('book_storage'),

  generateId() {
    return this.length ? this.last().get('bookId') + 1 : 1;
  },
  comparator: 'bookId'
});
