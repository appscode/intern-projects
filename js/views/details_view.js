
const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  el: '.continer',
  detailsTemplate: 'details.html',

  initialize(options) {
    this.books = options.books;
  },
  render() {
    this.el.html(global.nunjucksEnv.render(this.detailsTemplate, {items: this.books}));
    return this;
  }
});
