const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: '.container',
  addBookTemplate: 'book_list.html',
  render(options) {
    console.log(options.length);
    console.log(options[0].get('title'));
    // const allModels = this.books.models;
    // this.$el.html(global.nunjucksEnv.render(this.addBookTemplate, {items: allModels}));
  }
});
