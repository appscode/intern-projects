const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: '.container',
  detailsTemplate: 'details.html',
  render(option) {
    if (option.length > 0) {
      this.$el.html(global.nunjucksEnv.render(this.detailsTemplate, {book: option[0]}));
    } else {
      alert('dlksfjl');
    }
  }
});
