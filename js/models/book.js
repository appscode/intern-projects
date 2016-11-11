const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$= $;
module.exports = Backbone.Model.extend({
	defauls: {
		b_name:'',//book name
		auther:'',//auther name
		catagory:''//book catagory 
	}
});