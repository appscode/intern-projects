(function() {
	window.App = {
		Views= {};
	}

const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;

App.View.Details = Backbone.View.extend({

	
	template: _.template($('#details_template').html()),

	initialize: function(){
		this.render();
	}, 

	render: function(){
		this.el.html(this.template(this.model.toJSON()));
	}

});

var book = new BookModel;
var bookView = new BookView({model: book});
})();