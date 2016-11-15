const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: '.continer',
  detailsTemplate: 'details.html',
  initialize(option) {
    console.log(option);
  },
  render() {
    this.$el.html(global.nunjucksEnv.render(this.detailsTemplate, {book: this}));
  }
});
