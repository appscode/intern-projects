var webdriver = require('selenium-webdriver');
var client = new webdriver.Builder().withCapabilities({
	'browserName': 'chrome'

}).build();
var chai = require('chai');
var expect = chai.expect;

describe('from Homepage', function() {
	var url = 'http://localhost:12344/#/new';

	before(function(done){
		client.get(url).then(function() {
			 done();
		});
	});

	/*after(function(done) {
		client.quit(url).then(function() {
			 done();
		});

	});*/

	it('returns the title of the page', function(done) {
		client.getTitle().then(function(title) {
			expect(title).to.equal('Book Library');
			done();

		});

	});
	it('Enter Book name',function(done) {
		client.findElement(webdriver.By.id('bName')).sendKeys('abc');
		done();
	});
});