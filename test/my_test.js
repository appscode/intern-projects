// We are happy for teaching us such amazing tools, experiencing the job life.

var assert = require('assert'),     
    fs = require('fs'),     
    test = require('selenium-webdriver/testing'),     
    webdriver = require('selenium-webdriver');

test.describe('My Website', function() {
    this.timeout(11000);
    var driver;
    // var url = 'http://localhost:12344/#/';

    test.before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    test.it('Home Page', function() {
        driver.get('http://localhost:12344');
    });
    
    test.it('Add new book', function() {
        // for (var i = 1; i >= 0; i--) {
            
            driver.get('http://localhost:12344/#/new');
            driver.findElement(webdriver.By.id('bName')).sendKeys('bookName');
            driver.findElement(webdriver.By.id('AuthorName')).sendKeys('AuthorName');
            driver.findElement(webdriver.By.id('edition')).sendKeys('54');
            driver.findElement(webdriver.By.id('catagory')).sendKeys('category');
            driver.findElement(webdriver.By.id('price')).sendKeys('9384');
            driver.findElement(webdriver.By.id('abstract')).sendKeys('abstract');
            driver.findElement(webdriver.By.id('fileToUpload')).sendKeys('/home/shahriar/Desktop/images1.jpg');
            
            // driver.findElement(webdriver.By.id('cancel')).click();
             driver.findElement(webdriver.By.id('addBookBtn')).submit();
        // }

        // driver.get('http://localhost:12344/#');
        driver.findElement(webdriver.By.id('details')).click();

        driver.findElement(webdriver.By.id('remove')).click();
       // driver.get('http://localhost:12344/#/new');
//        driver.findElement(webdriver.By.name('bList')).click();

        // driver.wait(function() {
        //     return driver.isElementPresent(webdriver.By.name('bList'));
        // }, 15000);
    });

    test.after(function() {
         // driver.manage().timeouts().implicitlyWait(60 * 1000);
        //driver.quit();
    });
});

