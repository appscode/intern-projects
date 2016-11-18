var assert = require('assert'),
fs = require('fs'),
test =require('selenium-webdriver/testing'),
 webdriver = require('selenium-webdriver'),
 chai = require('chai'),
expect = chai.expect;

test.describe('from Homepage', function() {
	this.timeout(20000);
	var url = 'http://localhost:12344/#/new';
	before(function(done){
		 driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
		driver.get(url).then(function() {
			 done();
		});
	});


	test.it.skip('returns the title of the page', function(done) {
		driver.getTitle().then(function(title) {
			expect(title).to.equal('Book Library');
			done();

		});

	});
	test.it('Add New Book', function(done) {
		driver.findElement(webdriver.By.id('bName')).sendKeys('Linux programming by Example');
		driver.findElement(webdriver.By.id('AuthorName')).sendKeys('Petersion');
		driver.findElement(webdriver.By.id('edition')).sendKeys('1');
		driver.findElement(webdriver.By.id('catagory')).sendKeys('Computer Science');
		driver.findElement(webdriver.By.id('price')).sendKeys('300');
		driver.findElement(webdriver.By.id('abstract')).sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius non odio at vestibulum. Aliquam id purus sapien. Morbi at sapien id erat tempor fermentum. Pellentesque pharetra lacinia leo in tristique. Suspendisse iaculis orci placerat commodo accumsan. Curabitur velit arcu, auctor sit amet turpis at, venenatis porta mauris. Integer egestas, odio eu sollicitudin ultrices, risus quam lacinia nisi, eget vulputate lorem tortor ac felis. Suspendisse quis justo eget leo commodo tincidunt. Donec rhoncus neque ac dapibus blandit. Suspendisse posuere metus eu dolor porttitor, nec posuere lorem placerat. Proin dapibus ante eu tortor aliquet eleifend. Cras tincidunt mauris nec tristique sagittis. Fusce in nulla cursus, finibus justo ac, convallis libero. Quisque in enim purus. Donec posuere efficitur enim ut maximus.');
		driver.findElement(webdriver.By.id('fileToUpload')).sendKeys('/home/shahriar/Downloads/l1.jpg');
		driver.findElement(webdriver.By.id('addBookBtn')).submit();
		done();
	});

	test.it('Add New Book2', function(done) {
		driver.get('http://localhost:12344/#/new').then(function() {
			done();
		} );
		driver.findElement(webdriver.By.id('bName')).sendKeys('Security Enginerring');
		driver.findElement(webdriver.By.id('AuthorName')).sendKeys('Not Me');
		driver.findElement(webdriver.By.id('edition')).sendKeys('2');
		driver.findElement(webdriver.By.id('catagory')).sendKeys('Computer Science');
		driver.findElement(webdriver.By.id('price')).sendKeys('-54');
		driver.findElement(webdriver.By.id('abstract')).sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius non odio at vestibulum. Aliquam id purus sapien. Morbi at sapien id erat tempor fermentum. Pellentesque pharetra lacinia leo in tristique. Suspendisse iaculis orci placerat commodo accumsan. Curabitur velit arcu, auctor sit amet turpis at, venenatis porta mauris. Integer egestas, odio eu sollicitudin ultrices, risus quam lacinia nisi, eget vulputate lorem tortor ac felis. Suspendisse quis justo eget leo commodo tincidunt. Donec rhoncus neque ac dapibus blandit. Suspendisse posuere metus eu dolor porttitor, nec posuere lorem placerat. Proin dapibus ante eu tortor aliquet eleifend. Cras tincidunt mauris nec tristique sagittis. Fusce in nulla cursus, finibus justo ac, convallis libero. Quisque in enim purus. Donec posuere efficitur enim ut maximus.');
		driver.findElement(webdriver.By.id('fileToUpload')).sendKeys('/home/shahriar/Downloads/2.jpg');
		driver.findElement(webdriver.By.id('addBookBtn')).submit();
		driver.getCurrentUrl().then(function(curl) {
		 expect(curl).to.equal('http://localhost:12344/#/');
		});
		done();
	});
	test.it('Book details test.', function(done) {
		var links = driver.getNumberOfElementsFound(webdriver.By.tagName('a'));
		console.log(links);
		driver.getCurrentUrl().then(function(curl) {
		 // expect(curl).to.equal('http://localhost:12344/#/');
		});
		done();
	});
	/*after(function(done) {
		driver.quit(url).then(function() {
			 done();
		});

	});*/
});