const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: '.container',
  addBookTemplate: 'book_list.html',
  initialize(options) {
    this.books = options.books;
    this.books.fetch();
  },
  render() {
    const allModels = this.books.models;
    this.$el.html(global.nunjucksEnv.render(this.addBookTemplate, {items: allModels}));
  }
});
