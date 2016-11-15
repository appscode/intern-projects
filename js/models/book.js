const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.Model.extend({
  defauls: {
    title: '', // book name
    author: '', // author name
    edition: '', // book editon
    catagory: '', // book catagory
    price: '',
    abstract: '',
    bookImage: '', // book cover image data
    bookId: ''
  }
});
