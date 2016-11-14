const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.Model.extend({
  defauls: {
    title: '', // book name
    auther: '', // auther name
    edition: '', // book catagory
    bookImage: '', // book cover image direcory
    bookId: ''
  }
});
