const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.Model.extend({
  defauls: {
    title: 'abc', // book name
    author: 'dsf', // author name
    edition: '3', // book editon
    category: 'df', // book catagory
    price: '243',
    abstract: 'asdffssdfsdf',
    bookImage: '../Book_Images/l1.jpg', // book cover image direcory
    bookId: '3'
  }
});
