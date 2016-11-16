const Backbone = require('backbone');
const $ = require('jquery');
const _ = require('lodash');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: '.container',
  detailsTemplate: 'details.html',
  model: '',
  initialize(options) {
    this.books = options.books;
    // this.books.fetch();
  },
  render(option) {
    if (option.length > 0) {
      const idd = option[0].get('id');
      this.model = idd;
      this.$el.html(global.nunjucksEnv.render(this.detailsTemplate, {book: option[0]}));
    } else {
      alert('Sorry, Page not found. :(');
    }
  },
  events: {
    'click #remove': 'remove'
  },
  remove() {
    // const model = this.books.models;
    // this.books.remove({id: this.model});
    const that = this;
    _.invoke(this.books.where({id: that.model}), 'destroy');
    Backbone.history.navigate('#/', {trigger: true});
  }
});
