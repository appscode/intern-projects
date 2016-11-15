const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: '.container',
  addBookTemplate: 'book_list.html',
  initialize(options) {
    this.books = options.books;
  },
  render() {
    console.log('!!!', this.books.length);
    this.$el.html(global.nunjucksEnv.render(this.addBookTemplate, {items: this.books}));
  }
});
