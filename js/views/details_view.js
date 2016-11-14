const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
const ENTER_KEY = 13;
const ESC_KEY = 27;

module.exports = Backbone.View.extend({
	
	tagName: 'div',
	template: 'details.html'
});