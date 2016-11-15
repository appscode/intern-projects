const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
const Book = require('../models/book');
module.exports = Backbone.View.extend({
  el: '.container',
  addBookTemplate: 'form.html',
  bookList: '',
  initialize(options) {
    this.books = options.books;
  },
  render() {
    this.$el.html(global.nunjucksEnv.render(this.addBookTemplate));
  },
  events: {
    'submit #formId': 'upload'
  },
  upload(e) {
    e.preventDefault();
    // book property
    const title = $('#bName').val();
    const author = $('#AuthorName').val();
    const edition = $('#edition').val();
    const catagory = $('#catagory').val();
    const price = $('#price').val();
    const abstract = $('#abstract').val();
    const bookId = this.books.generateId();
    const bookImage = $('#fileToUpload').val();
    const book = new Book();
    book.title = title;
    book.author = author;
    book.edition = edition;
    book.catagory = catagory;
    book.price = price;
    book.abstract = abstract;
    book.bookImage = bookImage;
    book.bookId = bookId;
    this.books.add(book);
    this.localStorage().setItem('test', this.books.join(','));
    console.log(this.books);
    console.log(this.books.length);
    Backbone.history.navigate('#/', {trigger: true});
  }
});
