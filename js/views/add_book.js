const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
// const Book = require('../models/book');
module.exports = Backbone.View.extend({
  el: '.container',
  addBookTemplate: 'form.html',
  bookList: '',
  initialize(options) {
    this.books = options.books;
    console.log('in add book');
  },
  render() {
    this.$el.html(global.nunjucksEnv.render(this.addBookTemplate));
  },
  events: {
    'submit #formId': 'upload',
    'click #cancel': 'cancel'
  },
  cancel() {
    Backbone.history.navigate('#/', {trigger: true});
  },
  getBase64Image(path) {
    const img = new Image();
    img.src = path;
    const canvas = document.createElement('canvas');
    const that = this;
    img.onload = function() {
      console.log('sdfds');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL('image/png');
      // alert(dataURL.replace(/^data:image\/(png|jpg);base64,/, ''));
      const title = $('#bName').val();
      const author = $('#AuthorName').val();
      const edition = $('#edition').val();
      const catagory = $('#catagory').val();
      const price = $('#price').val();
      const abstract = $('#abstract').val();
      const bookId = that.books.generateId();
      const bookImage = dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
      that.books.create({
        title: title,
        author: author,
        edition: edition,
        catagory: catagory,
        price: price,
        abstract: abstract,
        bookImage: bookImage,
        bookId: bookId
      });
      Backbone.history.navigate('#/', {trigger: true});
      // return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
    };
  },
  upload(e) {
    e.preventDefault();
    const imagefile = document.getElementById('fileToUpload').files[0];
    const tmppath = URL.createObjectURL(imagefile);
    if (imagefile.size > 500000) {
      alert('File size exceeded');
    } else {
      this.getBase64Image(tmppath);
    }
  }
});
