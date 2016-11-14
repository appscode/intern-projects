const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.Router.extend({
  constructor(options) {
    Backbone.Router.prototype.constructor.call(this, options);
    this.books = options.books;
  },
  routes: {
    '/': 'home'
  },
  home() {
  // this.books.trigger();
    console.log('it found');
  }
});
