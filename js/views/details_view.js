const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
const ENTER_KEY = 13;
const ESC_KEY = 27;

var BookModel = Backbone.Model.extend({
	defaults: {
		image: '../Book_Images/l1.jpg'
		title:'Linux programming by example',
		author: 'Arnold Robbins',
		edition: '1st',
		category: 'Computer Science',
		price: '$300',
		overview: 'Linux Programming By Example introduces programmers with some background in C but no knowledge of the specifics of Linux programming to the fundamentals of Linux system programming and application development. Topics covered include using GNU development tools, system programming, file handling in Linux, interprocess communication, network programming, application programming interfaces, debugging and memory management, and version control and software distribution.'
	}
});

var BookView = Backbone.View.extend({

	tagName: 'div',
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