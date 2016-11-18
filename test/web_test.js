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

  test.it('sumbit 1 form ,then go to details, then remove, then Home page' , function() {

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
    }, 6000);
    driver.findElement(webdriver.By.id('Btn1')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Dtl1'));//for details page
    }, 6000);
    // checking the inserted value
    driver.findElement(webdriver.By.id('T')).getText().then(function(val){
      expect(val).to.equal(': '+title);
    });
     driver.findElement(webdriver.By.id('A')).getText().then(function(val){
      expect(val).to.equal(': '+author);
    });
      driver.findElement(webdriver.By.id('E')).getText().then(function(val){
      expect(val).to.equal(': '+edition);
    });
     driver.findElement(webdriver.By.id('C')).getText().then(function(val){
      expect(val).to.equal(': '+catagory);
    });
      driver.findElement(webdriver.By.id('P')).getText().then(function(val){
      expect(val).to.equal(': '+price);
    });
     driver.findElement(webdriver.By.id('Ab')).getText().then(function(val){
      expect(val).to.equal(abstract);
    });
    driver.findElement(webdriver.By.id('remove')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('home'));// for booklist page
    },6000);
  });
  test.it('sumbit 2 form ,then go to details, then remove, then Home page,remove order: 2 1' , function() {

    driver.get("http://localhost:12344/#/new");
    // fill the form
    let title1 = 'hello w';
    let author1 = 'Mr. Code';
    let edition1 = '4';
    let catagory1 = 'test1';
    let price1 = '100';
    let abstract1 = 'a..';
    let fileToUpload1 = '/home/uapncpc/Downloads/img1.jpg';
    driver.findElement(webdriver.By.id('bName')).sendKeys(title1);
    driver.findElement(webdriver.By.id('AuthorName')).sendKeys(author1);
    driver.findElement(webdriver.By.id('edition')).sendKeys(edition1);
    driver.findElement(webdriver.By.id('catagory')).sendKeys(catagory1);
    driver.findElement(webdriver.By.id('price')).sendKeys(price1);
    driver.findElement(webdriver.By.id('abstract')).sendKeys(abstract1);
    driver.findElement(webdriver.By.id('fileToUpload')).sendKeys(fileToUpload1);
    driver.findElement(webdriver.By.id('addBookBtn')).submit();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Btn1'));// check it is in booklist page
    }, 6000);
    driver.get("http://localhost:12344/#/new");
    // fill the form
    let title2 = 'hello wrold';
    let author2 = 'Mr. Code hi';
    let edition2 = '44';
    let catagory2 = 'test2';
    let price2 = '400';
    let abstract2 = 'b..';
    let fileToUpload2 = '/home/uapncpc/Downloads/img2.jpg';
    driver.findElement(webdriver.By.id('bName')).sendKeys(title2);
    driver.findElement(webdriver.By.id('AuthorName')).sendKeys(author2);
    driver.findElement(webdriver.By.id('edition')).sendKeys(edition2);
    driver.findElement(webdriver.By.id('catagory')).sendKeys(catagory2);
    driver.findElement(webdriver.By.id('price')).sendKeys(price2);
    driver.findElement(webdriver.By.id('abstract')).sendKeys(abstract2);
    driver.findElement(webdriver.By.id('fileToUpload')).sendKeys(fileToUpload2);
    driver.findElement(webdriver.By.id('addBookBtn')).submit();
     driver.wait(function() {
        return driver.findElement(webdriver.By.id('Btn2'));// check it is in booklist page
    }, 6000);
    driver.findElement(webdriver.By.id('Btn2')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Dtl2'));// check it is in detail page
    },6000);
    // checking the inserted value
    driver.findElement(webdriver.By.id('T')).getText().then(function(val){
      expect(val).to.equal(': '+title2);
    });
     driver.findElement(webdriver.By.id('A')).getText().then(function(val){
      expect(val).to.equal(': '+author2);
    });
      driver.findElement(webdriver.By.id('E')).getText().then(function(val){
      expect(val).to.equal(': '+edition2);
    });
     driver.findElement(webdriver.By.id('C')).getText().then(function(val){
      expect(val).to.equal(': '+catagory2);
    });
      driver.findElement(webdriver.By.id('P')).getText().then(function(val){
      expect(val).to.equal(': '+price2);
    });
     driver.findElement(webdriver.By.id('Ab')).getText().then(function(val){
      expect(val).to.equal(abstract2);
    });
    driver.findElement(webdriver.By.id('remove')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('home'));// for booklist page
    },6000);
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Btn1'));// check it is in booklist page
    }, 6000);
    driver.findElement(webdriver.By.id('Btn1')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Dtl1'));// check it is in detail page
    },6000);
    // checking the inserted value
    driver.findElement(webdriver.By.id('T')).getText().then(function(val){
      expect(val).to.equal(': '+title1);
    });
     driver.findElement(webdriver.By.id('A')).getText().then(function(val){
      expect(val).to.equal(': '+author1);
    });
      driver.findElement(webdriver.By.id('E')).getText().then(function(val){
      expect(val).to.equal(': '+edition1);
    });
     driver.findElement(webdriver.By.id('C')).getText().then(function(val){
      expect(val).to.equal(': '+catagory1);
    });
      driver.findElement(webdriver.By.id('P')).getText().then(function(val){
      expect(val).to.equal(': '+price1);
    });
     driver.findElement(webdriver.By.id('Ab')).getText().then(function(val){
      expect(val).to.equal(abstract1);
    });
    driver.findElement(webdriver.By.id('remove')).click();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('home'));// for booklist page
    },6000);

  }); 
  test.it('in form click the cancel then go to Home page' , function() {

    driver.get("http://localhost:12344/#/new");
    // fill the form
    let title = 'hello w';
    let author = 'Mr. Code';
    let edition = '4';
    let catagory = 'test1';
    let price = '-100';
    let abstract = 'a..';
    let fileToUpload = '/home/uapncpc/Downloads/img1.jpg';
    driver.findElement(webdriver.By.id('bName')).sendKeys(title);
    driver.findElement(webdriver.By.id('AuthorName')).sendKeys(author);
    driver.findElement(webdriver.By.id('edition')).sendKeys(edition);
    driver.findElement(webdriver.By.id('catagory')).sendKeys(catagory);
    driver.findElement(webdriver.By.id('price')).sendKeys(price);
    driver.findElement(webdriver.By.id('abstract')).sendKeys(abstract);
    driver.findElement(webdriver.By.id('fileToUpload')).sendKeys(fileToUpload);
    driver.findElement(webdriver.By.id('cancel')).click();

    driver.wait(function() {
        return driver.findElement(webdriver.By.id('home'));// for booklist page
    },6000);
  });
  test.it('Form empty field check, then only fill the empty then submit' , function() {

    driver.get("http://localhost:12344/#/new");
    // fill the form
    let title = '';
    let author = 'Mr. Code';
    let edition = '4';
    let catagory = 'test1';
    let price = '';
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
    driver.switchTo().alert().accept();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('formId'));// for booklist page
    },6000);
    title = 'book';
    driver.findElement(webdriver.By.id('bName')).sendKeys(title);
    driver.findElement(webdriver.By.id('addBookBtn')).submit();
    driver.switchTo().alert().accept();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('formId'));// for booklist page
    },6000);
    price = '105';
    driver.findElement(webdriver.By.id('price')).sendKeys(price);
    driver.findElement(webdriver.By.id('addBookBtn')).submit();
    // driver.switchTo().alert().accept();
    driver.wait(function() {
        return driver.findElement(webdriver.By.id('Btn1'));// for booklist page
    },6000);
  });
  test.after(function() {
   driver.quit();
  });
});

