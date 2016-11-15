const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
// const Book = require('../models/book');
module.exports = Backbone.View.extend({
  el: '.container',
  addBookTemplate: 'form.html',
  bookList: '',
  initialize(options) {
    this.books = options.books;
    console.log('in add book');
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
    this.books.create({
      title: title,
      author: author,
      edition: edition,
      catagory: catagory,
      price: price,
      abstract: abstract,
      bookImage: bookImage,
      bookId: bookId
    });
    Backbone.history.navigate('#/', {trigger: true});
  }
});
