const assert = require('assert');
const expect = require('chai').expect;
fs = require('fs');
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
test.describe('Book Library', function() {
  this.timeout(35000);
  let driver; 
  test.before(function() {
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
  });

  test.it('sumbit 1 form ,then go to details, then remove Home page' , function() {

    driver.get("http://localhost:12344/#/new");
    // fill the form
    let title = 'hello w';
    let author = 'Mr. Code';
    let edition = '4';
    let catagory = 'test1';
    let price = '100';
    let abstract = 'a..';
    let fileToUpload = '/home/uapncpc/Downloads/img1.jpg';
    driver.findElement(webdriver.By.id('bName')).sendKeys(title);
    driver.findElement(webdriver.By.id('AuthorName')).sendKeys(author);
    driver.findElement(webdriver.By.id('edition')).sendKeys(edition);
    driver.findElement(webdriver.By.id('catagory')).sendKeys(catagory);
    driver.findElement(webdriver.By.id('price')).sendKeys(price);
    driver.findElement(webdriver.By.id('abstract')).sendKeys(abstract);
    driver.findElement(webdriver.By.id('fileToUpload')).sendKeys(fileToUpload);
    driver.findElement(webdriver.By.id('addBookBtn')).submit();

    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Btn1'));// for booklist page
    }, 16000);
    driver.findElement(webdriver.By.id('Btn1')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Dtl1'));//for details page
    }, 26000);
    // checking the inserted value
     driver.wait(function() {
        return driver.findElement(webdriver.By.id('T_'+title));//for details page title
    }, 26000);
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('A_'+author));//for details page author
    }, 26000);
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('E_'+edition));//for details page edition
    }, 26000);
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('C_'+catagory));//for details page category
    }, 26000);
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('P_'+price));//for details page price
    }, 26000);
    driver.findElement(webdriver.By.id('remove')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('home'));// for booklist page
    }, 36000);
  });
  
  test.after(function() {
    driver.quit();
  });
});

