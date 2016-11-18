var assert = require('assert'),     
    fs = require('fs'),     
    test = require('selenium-webdriver/testing'),     
    webdriver = require('selenium-webdriver');

test.describe('My Website', function() {
    this.timeout(15000);
    var driver;
    //var url = 'http://localhost:12344/#/';

    test.before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    test.it('Contact form should return success', function(){     
        driver.get('http://localhost:12344');
        
    });

    test.after(function() {
        driver.quit();
    });
});
